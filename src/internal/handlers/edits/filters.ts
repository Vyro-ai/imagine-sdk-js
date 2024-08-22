import { AIFilters, Status } from "src/internal/enums";
import { Image, toImage } from "src/internal/models/image";
import { Result, success, error } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { ImageParam } from "src/internal/types";
import { toBlob } from "src/internal/utils/blob";
import { FormDataBuilder } from "src/internal/utils/form";

const getIds = (filterId: AIFilters) => {
  const finalFilterId = filterId === AIFilters.PIXAR_DISNEY ? 1 : filterId;
  const finalStyleId = filterId === AIFilters.PIXAR_DISNEY ? 2 : 1;
  return {
    finalFilterId,
    finalStyleId,
  };
};

const filters = async (
  client: RequestClient,
  image: ImageParam,
  filterId: AIFilters
): Promise<Result<Image>> => {
  const { finalFilterId, finalStyleId } = getIds(filterId);

  const data = new FormDataBuilder()
    .integer("style_id", finalStyleId)
    .integer("filter_id", finalFilterId)
    .blob("image", await toBlob(image))
    .build();

  const res: {
    status: number;
    data: Response;
  } = await client.fetch("v1/imagine/api/edits/filters", data);

  if (res.status !== Status.OK) {
    return error(await res.data.json(), res.status);
  }

  const r = toImage(await res.data.arrayBuffer());

  return success(r);
};

export const filtersHandler =
  (client: RequestClient) => async (image: ImageParam, filterId: AIFilters) =>
    (await filters(client, image, filterId)) as Result<Image>;

export default filtersHandler;

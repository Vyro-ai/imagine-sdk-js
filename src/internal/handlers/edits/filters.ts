import { Status } from "src/internal/enums/statuses";
import { Image, toImage } from "src/internal/models/image";
import { Result, success, error } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { ImageParam } from "src/internal/types/image";
import { toBlob } from "src/internal/utils/blob";
import { FormDataBuilder } from "src/internal/utils/form";
import { Filters } from "src/models";

const getIds = (filterId: Filters) => {
  const finalFilterId = filterId === Filters.PIXAR_DISNEY ? 1 : filterId;
  const finalStyleId = filterId === Filters.PIXAR_DISNEY ? 2 : 1;
  return {
    finalFilterId,
    finalStyleId,
  };
};

const filters = async (
  client: RequestClient,
  image: ImageParam,
  filterId: Filters
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
  (client: RequestClient) => async (image: ImageParam, filterId: Filters) =>
    (await filters(client, image, filterId)) as Result<Image>;

export default filtersHandler;

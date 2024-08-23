import { Status } from "src/internal/enums";
import { Image, toImage } from "src/internal/models/image";
import { Result, success, error } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { FiltersConfig, ImageParam } from "src/internal/types";
import { toBlob } from "src/internal/utils/blob";
import { FormDataBuilder } from "src/internal/utils/form";

const DEFAULT_FILTER_ID = 1;
const DEFAULT_STYLE_ID = 1;

const ids = (id: number) => {
  if (!id)
    return {
      filterId: DEFAULT_FILTER_ID,
      styleId: DEFAULT_STYLE_ID,
    };

  const baseValue = 1000;
  const filterId = id % baseValue;
  const styleId = Math.floor(id / baseValue);
  return {
    filterId,
    styleId,
  };
};

const filters = async (
  client: RequestClient,
  image: ImageParam,
  config?: FiltersConfig
): Promise<Result<Image>> => {
  const { filterId, styleId } = ids(config.filterId);

  const data = new FormDataBuilder()
    .integer("style_id", filterId)
    .integer("filter_id", styleId)
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
  (client: RequestClient) =>
  async (image: ImageParam, config?: FiltersConfig) =>
    (await filters(client, image, config)) as Result<Image>;

export default filtersHandler;

import { AIFiltersStyle, Filters, Status } from "src/internal/enums";
import { Image, toImage } from "src/internal/models/image";
import { Result, success, error } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { AIFitlersConfig, ImageParam } from "src/internal/types";
import { toBlob } from "src/internal/utils/blob";
import { FormDataBuilder } from "src/internal/utils/form";

const ids = (id: Filters) => ({
  filterId: id === Filters.PIXAR_DISNEY ? Filters.PIXAR_DISNEY : id,
  styleId:
    id === Filters.PIXAR_DISNEY
      ? AIFiltersStyle.STYLE_2
      : AIFiltersStyle.STYLE_1,
});

const filters = async (
  client: RequestClient,
  image: ImageParam,
  config: AIFitlersConfig = {}
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
  async (image: ImageParam, config?: AIFitlersConfig) =>
    (await filters(client, image, config)) as Result<Image>;

export default filtersHandler;

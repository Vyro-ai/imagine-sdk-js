import { toBlob } from "src/internal/utils/blob";
import { FormDataBuilder } from "src/internal/utils/form";

import { Status } from "../enums/statuses";
import { Image, toImage } from "../models/image";
import { Result, success, error } from "../models/result";
import { RequestClient } from "../services/client";
import { ImageParam } from "../types/image";

const upscale = async (
  client: RequestClient,
  image: ImageParam
): Promise<Result<Image>> => {
  const data = new FormDataBuilder()
    .integer("model_version", 1)
    .blob("image", await toBlob(image))
    .build();

  const res: {
    status: number;
    data: Response;
  } = await client.fetch("v1/imagine/api/upscale", data);

  if (res.status !== Status.OK) {
    return error(await res.data.json(), res.status);
  }

  const r = toImage(await res.data.arrayBuffer());

  return success(r);
};

export const upscaleHandler =
  (client: RequestClient) => async (image: ImageParam) =>
    (await upscale(client, image)) as Result<Image>;

export default upscaleHandler;

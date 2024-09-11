import { Status } from "src/internal/enums";
import { Image, toImage } from "src/internal/models/image";
import { Result, success, error } from "src/internal/models/result";
import { HeadshotConfig, ImageParam } from "src/internal/types";
import { toBlob } from "src/internal/utils/blob";
import { FormDataBuilder } from "src/internal/utils/form";
import { RequestClient } from "src/services";

const headshot = async (
  client: RequestClient,
  prompt: string,
  image: ImageParam,
  config: HeadshotConfig = {}
): Promise<Result<Image>> => {
  const data = new FormDataBuilder()
    .string("prompt", prompt)
    .blob("image", await toBlob(image))
    .string("negative_prompt", config.negativePrompt)
    .integer("seed", config.seed)
    .build();

  const res: {
    status: number;
    data: Response;
  } = await client.fetch("v1/imagine/api/face/headshot", data);

  if (res.status !== Status.OK) {
    return error(await res.data.json(), res.status);
  }

  const r = toImage(await res.data.arrayBuffer());

  return success(r);
};

export const headshotHandler =
  (client: RequestClient) =>
  async (prompt: string, image: ImageParam, config?: HeadshotConfig) =>
    (await headshot(client, prompt, image, config)) as Result<Image>;

export default headshotHandler;

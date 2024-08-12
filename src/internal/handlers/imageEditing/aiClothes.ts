import { Status } from "src/internal/enums/statuses";
import { Image, toImage } from "src/internal/models/image";
import { Result, success, error } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { AIClothesConfig } from "src/internal/types/aiClothes";
import { ImageParam } from "src/internal/types/image";
import { toBlob } from "src/internal/utils/blob";
import { FormDataBuilder } from "src/internal/utils/form";

const aiClothes = async (
  client: RequestClient,
  prompt: string,
  image: ImageParam,
  config?: AIClothesConfig
): Promise<Result<Image>> => {
  const data = new FormDataBuilder()
    .string("prompt", prompt)
    .blob("image", await toBlob(image))
    .integer("seed", config.seed)
    .string("negative_prompt", config.negativePrompt)
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

export const aiClothesHandler =
  (client: RequestClient) =>
  async (prompt: string, image: ImageParam, config?: AIClothesConfig) =>
    (await aiClothes(client, prompt, image, config)) as Result<Image>;

export default aiClothesHandler;

import { Status } from "src/internal/enums/statuses";
import { T2IGenerationStyle } from "src/internal/enums/styles";
import { Image, toImage } from "src/internal/models/image";
import { Result, success, error } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { FormDataBuilder } from "src/internal/utils/form";
import { T2IGenerationConfig } from "src/models";

const textToImage = async (
  client: RequestClient,
  prompt: string,
  config: T2IGenerationConfig = {}
): Promise<Result<Image>> => {
  const data = new FormDataBuilder()
    .string("prompt", prompt)
    .string("aspect_ratio", config.aspectRatio)
    .integer("style_id", config.style, T2IGenerationStyle.IMAGINE_V1)
    .string("negative_prompt", config.negativePrompt)
    .float("cfg", config.cfg)
    .integer("seed", config.seed)
    .integer("steps", config.steps)
    .integer("high_res_results", config.highResolution ? 1 : null)
    .build();

  const res: {
    status: number;
    data: Response;
  } = await client.fetch("v1/imagine/api/generations", data);

  if (res.status !== Status.OK) {
    return error(await res.data.json(), res.status);
  }

  const r = toImage(await res.data.arrayBuffer());

  return success(r);
};

export const textToImageHandler =
  (client: RequestClient) =>
  async (prompt: string, config?: T2IGenerationConfig) =>
    (await textToImage(client, prompt, config)) as Result<Image>;

export default textToImageHandler;

import { Status } from "../enums/statuses";
import { GenerationStyle } from "../enums/styles";
import { Image, toImage } from "../models/image";
import { Result, success, error } from "../models/result";
import { RequestClient } from "../services/client";
import { GenerationConfig } from "../types/generations";
import { FormDataBuilder } from "../utils/form";

const generations = async (
  client: RequestClient,
  prompt: string,
  config: GenerationConfig = {}
): Promise<Result<Image>> => {
  const data = new FormDataBuilder()
    .string("prompt", prompt)
    .string("aspect_ratio", config.aspectRatio)
    .integer("style_id", config.style, GenerationStyle.IMAGINE_V1)
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

export const generationsHandler =
  (client: RequestClient) =>
  async (prompt: string, config?: GenerationConfig) =>
    (await generations(client, prompt, config)) as Result<Image>;

export default generationsHandler;

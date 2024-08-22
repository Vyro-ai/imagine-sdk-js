import { Status, GenerationsStyle } from "src/internal/enums";
import { Image, toImage } from "src/internal/models/image";
import { Result, success, error } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { GenerationsConfig } from "src/internal/types";
import { FormDataBuilder } from "src/internal/utils/form";

const generations = async (
  client: RequestClient,
  prompt: string,
  config: GenerationsConfig = {}
): Promise<Result<Image>> => {
  const data = new FormDataBuilder()
    .string("prompt", prompt)
    .string("aspect_ratio", config.aspectRatio)
    .integer("style_id", config.style, GenerationsStyle.IMAGINE_V1)
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
  async (prompt: string, config?: GenerationsConfig) =>
    (await generations(client, prompt, config)) as Result<Image>;

export default generationsHandler;

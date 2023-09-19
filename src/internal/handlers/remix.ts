import { toBlob } from "src/internal/utils/blob";
import { FormDataBuilder } from "src/internal/utils/form";

import { Status } from "../enums/statuses";
import { RemixStyle } from "../enums/styles";
import { Image, toImage } from "../models/image";
import { Result, success, error } from "../models/result";
import { RequestClient } from "../services/client";
import { ImageParam } from "../types/image";
import { RemixConfig } from "../types/remix";

const remix = async (
  client: RequestClient,
  prompt: string,
  image: ImageParam,
  config: RemixConfig = {}
): Promise<Result<Image>> => {
  const data = new FormDataBuilder()
    .string("prompt", prompt)
    .blob("image", await toBlob(image))
    .integer("style_id", config.style, RemixStyle.IMAGINE_V1)
    .integer("seed", config.seed)
    .integer("steps", config.steps)
    .integer("strength", config.strength)
    .string("control", config.control)
    .float("cfg", config.cfg)
    .string("negative_prompt", config.negativePrompt)
    .build();

  const res: {
    status: number;
    data: Response;
  } = await client.fetch("v1/imagine/api/edits/remix", data);

  if (res.status !== Status.OK) {
    return error(await res.data.json(), res.status);
  }

  const r = toImage(await res.data.arrayBuffer());

  return success(r);
};

export const remixHandler =
  (client: RequestClient) =>
  async (prompt: string, image: ImageParam, config?: RemixConfig) =>
    (await remix(client, prompt, image, config)) as Result<Image>;

export default remixHandler;

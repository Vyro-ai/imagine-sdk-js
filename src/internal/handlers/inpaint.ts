import { toBlob } from "src/internal/utils/blob";
import { FormDataBuilder } from "src/internal/utils/form";

import { Status } from "../enums/statuses";
import { InpaintStyle } from "../enums/styles";
import { Image, toImage } from "../models/image";
import { Result, success, error } from "../models/result";
import { RequestClient } from "../services/client";
import { ImageParam } from "../types/image";
import { InpaintConfig } from "../types/inpaint";

const inpaint = async (
  client: RequestClient,
  prompt: string,
  image: ImageParam,
  mask: ImageParam,
  config: InpaintConfig = {}
): Promise<Result<Image>> => {
  const data = new FormDataBuilder()
    .string("prompt", prompt)
    .blob("image", await toBlob(image))
    .blob("mask", await toBlob(mask))
    .integer("style_id", InpaintStyle.REALISM)
    .float("cfg", config.cfg)
    .string("neg_prompt", config.negativePrompt)
    .float("inpaint_strength", config.inPaintStrength)
    .build();

  const res: {
    status: number;
    data: Response;
  } = await client.fetch("v1/imagine/api/edits/inpaint", data);

  if (res.status !== Status.OK) {
    return error(await res.data.json(), res.status);
  }

  const r = toImage(await res.data.arrayBuffer());
  return success(r);
};

export const inpaintHandler =
  (client: RequestClient) =>
  async (
    prompt: string,
    image: ImageParam,
    mask: ImageParam,
    config: InpaintConfig
  ) =>
    (await inpaint(client, prompt, image, mask, config)) as Result<Image>;

export default inpaintHandler;

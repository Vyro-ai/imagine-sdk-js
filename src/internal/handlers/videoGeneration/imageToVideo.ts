import { Status } from "src/internal/enums/statuses";
import { Result, success, error } from "src/internal/models/result";
import { toVideo, Video } from "src/internal/models/video";
import { RequestClient } from "src/internal/services/client";
import { ImageParam } from "src/internal/types/image";
import { toBlob } from "src/internal/utils/blob";
import { FormDataBuilder } from "src/internal/utils/form";
import { I2VGeneraetionConfig } from "src/models";

const imageToVideo = async (
  client: RequestClient,
  image: ImageParam,
  prompt: string,
  config: I2VGeneraetionConfig = {}
): Promise<Result<Video>> => {
  const data = new FormDataBuilder()
    .string("prompt", prompt)
    .blob("image", await toBlob(image))
    .integer("fps", config.fps)
    .integer("seed", config.seed)
    .float("cfg_scale", config.cfg_scale)
    .integer("steps", config.steps)
    .build();

  const res: {
    status: number;
    data: Response;
  } = await client.fetch("commercial's exposed endpoint", data);

  if (res.status !== Status.OK) {
    return error(await res.data.json(), res.status);
  }

  const r = toVideo(await res.data.arrayBuffer());

  return success(r);
};

export const imageToVideoHandler =
  (client: RequestClient) =>
  async (prompt: string, image: ImageParam, config?: I2VGeneraetionConfig) =>
    (await imageToVideo(client, image, prompt, config)) as Result<Video>;

export default imageToVideoHandler;

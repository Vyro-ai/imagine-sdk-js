import { Status } from "src/internal/enums/statuses";
import { Image, toImage } from "src/internal/models/image";
import { Result, success, error } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { ImageParam } from "src/internal/types/image";
import { toBlob } from "src/internal/utils/blob";
import { FormDataBuilder } from "src/internal/utils/form";

const background = async (
  client: RequestClient,
  image: ImageParam,
  prompt: string
): Promise<Result<Image>> => {
  const data = new FormDataBuilder()
    .string("prompt", prompt)
    .blob("image", await toBlob(image))
    .build();

  const res: {
    status: number;
    data: Response;
  } = await client.fetch("v1/imagine/api/generations/background", data);

  if (res.status !== Status.OK) {
    return error(await res.data.json(), res.status);
  }

  const r = toImage(await res.data.arrayBuffer());

  return success(r);
};

export const backgroundHandler =
  (client: RequestClient) => async (image: ImageParam, prompt: string) =>
    (await background(client, image, prompt)) as Result<Image>;

export default backgroundHandler;

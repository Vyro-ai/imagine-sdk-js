import { Image, toImage } from "src/internal/models/image";
import { error, Result, success } from "src/internal/models/result";
import { ImageParam } from "src/internal/types/image";
import { toBlob } from "src/internal/utils/blob";
import { FormDataBuilder } from "src/internal/utils/form";
import { Status } from "src/models";
import { RequestClient } from "src/services";

const remover = async (
  client: RequestClient,
  image: ImageParam
): Promise<Result<Image>> => {
  const data = new FormDataBuilder().blob("image", await toBlob(image)).build();

  const res: {
    status: number;
    data: Response;
  } = await client.fetch("v1/imagine/api/background/remover", data);

  if (res.status !== Status.OK) {
    return error(await res.data.json(), res.status);
  }

  const r = toImage(await res.data.arrayBuffer());

  return success(r);
};

export const removerHandler =
  (client: RequestClient) => async (image: ImageParam) =>
    (await remover(client, image)) as Result<Image>;

export default removerHandler;

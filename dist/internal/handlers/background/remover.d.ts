import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { ImageParam } from "src/internal/types/image";
import { RequestClient } from "src/services";
export declare const removerHandler: (client: RequestClient) => (image: ImageParam) => Promise<Result<Image>>;
export default removerHandler;

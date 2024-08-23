import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { ImageParam, InpaintConfig } from "src/internal/types";
import { RequestClient } from "src/services";
export declare const inpaintHandler: (client: RequestClient) => (prompt: string, image: ImageParam, mask: ImageParam, config: InpaintConfig) => Promise<Result<Image>>;
export default inpaintHandler;

import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { ImageParam } from "src/internal/types/image";
export declare const backgroundHandler: (client: RequestClient) => (image: ImageParam, prompt: string) => Promise<Result<Image>>;
export default backgroundHandler;

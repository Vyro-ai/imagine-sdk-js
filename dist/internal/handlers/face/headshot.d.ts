import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { ImageParam } from "src/internal/types/image";
import { RequestClient } from "src/services";
export declare const headshotHandler: (client: RequestClient) => (prompt: string, image: ImageParam) => Promise<Result<Image>>;
export default headshotHandler;

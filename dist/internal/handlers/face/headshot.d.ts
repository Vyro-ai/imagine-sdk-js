import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { HeadshotConfig, ImageParam } from "src/internal/types";
import { RequestClient } from "src/services";
export declare const headshotHandler: (client: RequestClient) => (prompt: string, image: ImageParam, config?: HeadshotConfig) => Promise<Result<Image>>;
export default headshotHandler;

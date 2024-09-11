import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { ImageParam, RemixConfig } from "src/internal/types";
export declare const remixHandler: (client: RequestClient) => (prompt: string, image: ImageParam, config?: RemixConfig) => Promise<Result<Image>>;
export default remixHandler;

import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { ImageParam } from "src/internal/types/image";
import { RemixConfig } from "src/models";
export declare const remixHandler: (client: RequestClient) => (prompt: string, image: ImageParam, config?: RemixConfig) => Promise<Result<Image>>;
export default remixHandler;

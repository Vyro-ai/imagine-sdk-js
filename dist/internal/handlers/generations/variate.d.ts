import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { ImageParam, VariationConfig } from "src/internal/types";
import { RequestClient } from "src/services";
export declare const variationHandler: (client: RequestClient) => (prompt: string, image: ImageParam, config?: VariationConfig) => Promise<Result<Image>>;
export default variationHandler;

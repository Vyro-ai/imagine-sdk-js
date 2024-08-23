import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { AIFiltersConfig, ImageParam } from "src/internal/types";
export declare const filtersHandler: (client: RequestClient) => (image: ImageParam, config?: AIFiltersConfig) => Promise<Result<Image>>;
export default filtersHandler;

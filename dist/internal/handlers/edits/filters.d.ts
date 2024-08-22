import { AIFilters } from "src/internal/enums";
import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { ImageParam } from "src/internal/types";
export declare const filtersHandler: (client: RequestClient) => (image: ImageParam, filterId: AIFilters) => Promise<Result<Image>>;
export default filtersHandler;

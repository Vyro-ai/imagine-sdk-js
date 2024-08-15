import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { ImageParam } from "src/internal/types/image";
import { Filters } from "src/models";
export declare const filtersHandler: (client: RequestClient) => (image: ImageParam, filterId: Filters) => Promise<Result<Image>>;
export default filtersHandler;

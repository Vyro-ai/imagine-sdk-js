import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { RequestClient } from "src/internal/services/client";
import { GenerationsConfig } from "src/internal/types";
export declare const generationsHandler: (client: RequestClient) => (prompt: string, config?: GenerationsConfig) => Promise<Result<Image>>;
export default generationsHandler;

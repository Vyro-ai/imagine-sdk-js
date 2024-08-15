import { Remix } from "src/internal/handlers/edits/remix";
import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { ImageParam } from "src/internal/types/image";
import { Filters } from "src/models";
import { RequestClient } from "src/services";
export interface Edits {
    /**
     * Returns methods that return promises for remixing image.
     *
     * @param {RequestClient} client - Client for making HTTP requests and fetching data
     */
    remix: Remix;
    /**
     * Applies AI filters on an image.
     *
     * @param {Filters} filterId - Relevant filter id {model : Filters}.
     * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the AI Filter's application on the provided image.
     */
    filters: (image: ImageParam, filterId: Filters) => Promise<Result<Image>>;
}
/**
 * Creates an instance of Edits with the http client.
 *
 * @param {RequestClient} : client - The API token for authentication.
 *
 * @returns {Edits} An instance of the Imagine client with various manipulation functions.
 */
export declare const editsHandler: (c: RequestClient) => Edits;

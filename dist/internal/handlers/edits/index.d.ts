import { Remix } from "src/internal/handlers/edits/remix";
import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { FiltersConfig, ImageParam, InpaintConfig } from "src/internal/types";
import { RequestClient } from "src/services";
export interface Edits {
    /**
     * Returns methods that return promises for remixing image.
     *
     * @param {RequestClient} client - Client for making HTTP requests and fetching data
     */
    remix: Remix;
    /**
     * Applies filters on an image.x
     *
     * @param {ImageParam} image - The image to apply filter on.
     * @param {FiltersConfig} [config] - Optional config for Filters {model : FiltersConfig}.
     * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the Filter's application on the provided image.
     */
    filters: (image: ImageParam, config?: FiltersConfig) => Promise<Result<Image>>;
    /**
     * Inpaint an image based on a prompt and mask.
     *
     * @param {string} prompt - The prompt for inpainting the image.
     * @param {ImageParam} image - The image to be inpainted.
     * @param {ImageParam} mask - The mask specifying the inpainting areas.
     * @param {InpaintConfig} [config] - Optional configuration for image inpainting. (model: InpaintConfig)
     * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image inpainting.
     */
    inpaint: (prompt: string, image: ImageParam, mask: ImageParam, config?: InpaintConfig) => Promise<Result<Image>>;
}
/**
 * Creates an instance of Edits with the http client.
 *
 * @param {RequestClient} : client - The API token for authentication.
 *
 * @returns {Edits} An instance of the Imagine client with various manipulation functions.
 */
export declare const editsHandler: (c: RequestClient) => Edits;

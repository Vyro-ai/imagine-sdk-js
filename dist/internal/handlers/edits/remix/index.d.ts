import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { RemixConfig, ImageParam } from "src/internal/types";
import { RequestClient } from "src/services";
export interface Remix {
    /**
     * Remix an image.
     *
     * @param {string} prompt - Guidance to remix the image.
     * @param {ImageParam} image - The image which is supposed to be remixed.
     * @param {RemixConfig} [config] - Optional configuration for image generation. (model: RemixConfig).
     * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image upscaling.
     */
    remix: (prompt: string, image: ImageParam, config?: RemixConfig) => Promise<Result<Image>>;
}
/**
 * Creates an instance of Remix with the http client.
 *
 * @param {RequestClient} : client - The API token for authentication.
 *
 * @returns {Remix} An instance of the Imagine client with various manipulation functions.
 */
export declare const remixHandler: (c: RequestClient) => Remix;

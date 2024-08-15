import { upscaleHandler } from "src/internal/handlers/enhance/upscale";
import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { ImageParam } from "src/internal/types/image";
import { RequestClient } from "src/services";

export interface Enhance {
  /**
   * Upscale an image.
   *
   * @param {ImageParam} image - The image whose that is to be upscaled.
   * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image upscaling.
   */
  upscale: (image: ImageParam) => Promise<Result<Image>>;
}

/**
 * Creates an instance of Enhance with the http client.
 *
 * @param {RequestClient} : client - The API token for authentication.
 *
 * @returns {Enhance} An instance of the Imagine client with various manipulation functions.
 */
export const enhanceHandler: (c: RequestClient) => Enhance = (c) => ({
  upscale: upscaleHandler(c),
});

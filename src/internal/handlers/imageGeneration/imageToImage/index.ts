import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { ImageParam } from "src/internal/types/image";
import { RemixConfig } from "src/models";
import { RequestClient } from "src/services";

import remixHandler from "./remix";

export interface ImageToImage {
  /**
   * Remix an image based on a prompt.
   *
   * @param {string} prompt - The prompt for remixing the image.
   * @param {ImageParam} image - The image to be remixed.
   * @param {RemixConfig} [config] - Optional configuration for image remixing. (model: RemixConfig)
   * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image remixing.
   */
  remix: (
    prompt: string,
    image: ImageParam,
    config?: RemixConfig
  ) => Promise<Result<Image>>;
}

/**
 * Creates an instance of the Image Generation with the http client.
 *
 * @param {RequestClient} : client - The API token for authentication.
 *
 * @returns {ImageToImage} An instance of the Imagine client with various image generation and manipulation functions.
 */
const ImageToImageHandler = (c: RequestClient) => ({
  remix: remixHandler(c),
});

export default ImageToImageHandler;

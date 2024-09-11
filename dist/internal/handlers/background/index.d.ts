import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { ImageParam } from "src/internal/types";
import { RequestClient } from "src/services";
export interface Background {
  /**
   * Remove background of an image.
   *
   * @param {ImageParam} image - The image whose background is to be removed.
   * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image upscaling.
   */
  remover: (image: ImageParam) => Promise<Result<Image>>;
}
/**
 * Creates an instance of Background with the http client.
 *
 * @param {RequestClient} : client - The API token for authentication.
 *
 * @returns {Background} An instance of the Imagine client with various manipulation functions.
 */
export declare const backgroundHandler: (c: RequestClient) => {
  remover: (image: ImageParam) => Promise<Result<Image>>;
};

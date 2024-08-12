import { aiClothesHandler } from "src/internal/handlers/imageEditing/aiClothes";
import { bgGenerateHandler } from "src/internal/handlers/imageEditing/bgGenerate";
import { bgRemoverHandler } from "src/internal/handlers/imageEditing/bgRemover";
import { upscaleHandler } from "src/internal/handlers/imageEditing/upscale";
import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { AIClothesConfig } from "src/internal/types/aiClothes";
import { ImageParam } from "src/internal/types/image";
import { RequestClient } from "src/services";

export interface ImageEditing {
  /**
   * Upscale an image.
   *
   * @param {ImageParam} image - The image to be upscaled.
   * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image upscaling.
   */
  upscale: (image: ImageParam) => Promise<Result<Image>>;

  /**
   * Remove background of an image.
   *
   * @param {ImageParam} image - The image whose backgruond is to be removed.
   * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image upscaling.
   */
  bgRemover: (image: ImageParam) => Promise<Result<Image>>;

  /**
   * Remove background of an image.
   *
   * @param {ImageParam} image - The image whose backgruond is to be generated.
   * @param {string} prompt - Guidline to generate the background
   * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image upscaling.
   */
  bgGenerate: (image: ImageParam, prompt: string) => Promise<Result<Image>>;

  /**
   * Generate clothing while preserving the face of a subject.
   *
   * @param {ImageParam} image - The image whose backgruond is to be generated.
   * @param {string} prompt - Guidline to generate the background
   * @param {AIClothesConfig} [config] Optional configuration for ai clothes. (model: AIClothesConfig)
   * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image upscaling.
   */
  aiClothes: (
    image: ImageParam,
    prompt: string,
    config?: AIClothesConfig
  ) => Promise<Result<Image>>;
}

/**
 * Creates an instance of ImageEditing with the http client.
 *
 * @param {RequestClient} : client - The API token for authentication.
 *
 * @returns {ImageEditing} An instance of the Imagine client with various manipulation functions.
 */
export const imageEditingHandler = (c: RequestClient) => ({
  upscale: upscaleHandler(c),
  bgRemover: bgRemoverHandler(c),
  bgGenerate: bgGenerateHandler(c),
  aiClothes: aiClothesHandler(c),
});

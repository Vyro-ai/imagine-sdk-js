import { backgroundHandler } from "src/internal/handlers/generations/background";
import { generationsHandler as genHandler } from "src/internal/handlers/generations/generations";
import { variationHandler } from "src/internal/handlers/generations/variate";
import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { ImageParam } from "src/internal/types/image";
import { GenerationsConfig, VariationConfig } from "src/models";
import { RequestClient } from "src/services";

export interface Generations {
  /**
   * Generate background in an image.
   *
   * @param {ImageParam} image - The image whose backgruond is to be generated.
   * @param {string} prompt - Guidance prompt for background generation.
   * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image upscaling.
   */
  background: (image: ImageParam, prompt: string) => Promise<Result<Image>>;

  /**
   * Generate an image based on a prompt.
   *
   * @param {string} prompt - Guidance prompt for image generation.
   * @param {GenerationsConfig} [config] - Optional configuration for image generation. (model: GenerationsConfig)
   * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image upscaling.
   */
  generations: (
    prompt: string,
    config?: GenerationsConfig
  ) => Promise<Result<Image>>;

  /**
   * Apply variations to an image based on a prompt.
   *
   * @param {string} prompt - The prompt for applying variations.
   * @param {ImageParam} image - The image to which variations will be applied.
   * @param {VariationConfig} [config] - Optional configuration for applying variations. (model: VariationConfig)
   * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image variations.
   */
  variations: (
    prompt: string,
    image: ImageParam,
    config?: VariationConfig
  ) => Promise<Result<Image>>;
}

/**
 * Creates an instance of Generations with the http client.
 *
 * @param {RequestClient} : client - The API token for authentication.
 *
 * @returns {Generations} An instance of the Imagine client with various manipulation functions.
 */
export const generationsHandler: (c: RequestClient) => Generations = (c) => ({
  background: backgroundHandler(c),
  generations: genHandler(c),
  variations: variationHandler(c),
});

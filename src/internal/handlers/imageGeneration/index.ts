import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { T2IGenerationConfig } from "src/models";
import { RequestClient } from "src/services";

import { textToImageHandler } from "./textToImage";

export interface ImageGeneration {
  /**
   * Generate an image based on a prompt.
   *
   * @param {string} prompt - The prompt for generating the image.
   * @param {T2IGenerationConfig} [config] - Optional configuration for image generation. (model: T2IGenerationConfig)
   * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image generation.
   */
  textToImage: (
    prompt: string,
    config?: T2IGenerationConfig
  ) => Promise<Result<Image>>;
}

/**
 * Creates an instance of the Image Generation with the http client.
 *
 * @param {RequestClient} : client - The API token for authentication.
 *
 * @returns {ImageGeneration} An instance of the Imagine client with various image generation and manipulation functions.
 */
export const imageGenerationHandler = (c: RequestClient): ImageGeneration => ({
  textToImage: textToImageHandler(c),
});

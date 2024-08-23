import { headshotHandler } from "src/internal/handlers/face/headshot";
import { Image } from "src/internal/models/image";
import { Result } from "src/internal/models/result";
import { HeadshotConfig, ImageParam } from "src/internal/types";
import { RequestClient } from "src/services";

export interface Face {
  /**
   * Modifies the input image according to the prompt while preserving the face and background in input image.
   *
   * @param {ImageParam} image - The image that has to be changed.
   * @param {string} prompt - Guidance prompt for image editing.
   * @param {HeadshotConfig} [config] - Optional configuration for headshot. (model: HeadshotConfig)
   * @returns {Promise<Result<Image>>} A Promise that resolves with the result of the image upscaling.
   */
  headshot: (
    image: ImageParam,
    prompt: string,
    config?: HeadshotConfig
  ) => Promise<Result<Image>>;
}

/**
 * Creates an instance of Face with the http client.
 *
 * @param {RequestClient} : client - The API token for authentication.
 *
 * @returns {Face} An instance of the Imagine client with various manipulation functions.
 */
export const faceHandler: (c: RequestClient) => Face = (c) => ({
  headshot: headshotHandler(c),
});

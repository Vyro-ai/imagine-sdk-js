/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/prefer-default-export */
import {
  ImageEditing,
  imageEditingHandler,
} from "./internal/handlers/imageEditing";
import {
  ImageGeneration,
  imageGenerationHandler,
} from "./internal/handlers/imageGeneration";
import { RequestClient, instance } from "./internal/services/client";

const BASE_URL = "https://api.vyro.ai/";

/**
 * An interface for the Imagine SDK that provides methods for interacting with image generation and manipulation.
 *
 * @interface Imagine
 */
interface Imagine {
  /**
   * Returns methods that return promises for image generations.
   *
   * @param {RequestClient} client - Client for making HTTP requests and fetching data
   */
  imageGeneration: ImageGeneration;

  /**
   * Returns methods that return promises for image editing.
   *
   * @param {RequestClient} client - Client for making HTTP requests and fetching data
   */
  imageEditimg: ImageEditing;
}

/**
 * Creates an instance of the Imagine client with the specified token and optional configuration.
 *
 * @param {string} token - The API token for authentication.
 * @param {Object} [config] - Optional configuration object.
 *
 * @returns {Imagine} An instance of the Imagine client with various image generation and manipulation functions.
 */
export const client = (
  token: string,
  config?: { client?: RequestClient }
): Imagine => {
  const c = config?.client ?? instance(BASE_URL, token);

  return {
    imageGeneration: imageGenerationHandler(c),
    imageEditimg: imageEditingHandler(c),
  };
};

export default client;
export * from "./internal/enums/ratios";
export * from "./internal/enums/statuses";
export * from "./internal/enums/styles";
export * from "./internal/enums/controls";
export * from "./internal/types/textToImage";
export * from "./internal/types/remix";
export { Err } from "./internal/models/error";
export { RequestClient } from "./internal/services/client";
export { ImageParam } from "./internal/types/image";

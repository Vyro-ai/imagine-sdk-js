import {
  Background,
  backgroundHandler,
} from "src/internal/handlers/background";
import { Edits, editsHandler } from "src/internal/handlers/edits";
import { Enhance, enhanceHandler } from "src/internal/handlers/enhance";
import { Face, faceHandler } from "src/internal/handlers/face";
import {
  Generations,
  generationsHandler,
} from "src/internal/handlers/generations";
import { instance, RequestClient } from "src/internal/services/client";

const BASE_URL = "https://api.vyro.ai/";

/**
 * An interface for the Imagine SDK that provides methods for interacting with image generation and manipulation.
 *
 * @interface Imagine
 */
interface Imagine {
  /**
   * Returns methods that generate images.
   *
   * @param {RequestClient} client - Client for making HTTP requests and fetching data
   */
  generations: Generations;

  /**
   * Returns methods to interact with the background of an image.
   *
   * @param {RequestClient} client - Client for making HTTP requests and fetching data
   */
  background: Background;

  /**
   * Returns methods to enhance an image.
   *
   * @param {RequestClient} client - Client for making HTTP requests and fetching data
   */
  enhance: Enhance;

  /**
   * Returns methods to edit images.
   *
   * @param {RequestClient} client - Client for making HTTP requests and fetching data
   */
  edits: Edits;

  /**
   * Returns methods to edit images but preserve the face.
   *
   * @param {RequestClient} client - Client for making HTTP requests and fetching data
   */
  face: Face;
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
    generations: generationsHandler(c),
    background: backgroundHandler(c),
    enhance: enhanceHandler(c),
    edits: editsHandler(c),
    face: faceHandler(c),
  };
};

export default client;
export * from "./internal/enums";
export * from "./internal/types";
export { Err } from "./internal/models/error";
export { RequestClient } from "./internal/services/client";

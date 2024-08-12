import { imageToVideoHandler } from "src/internal/handlers/videoGeneration/imageToVideo";
import { Result } from "src/internal/models/result";
import { Video } from "src/internal/models/video";
import { ImageParam } from "src/internal/types/image";
import { I2VGeneraetionConfig } from "src/models";
import { RequestClient } from "src/services";

export interface VideoGeneration {
  /**
   * Generate a video based on an image and prompt for guidance .
   *
   * @param {string} prompt - The guidance for video generation.
   * @param {ImageParam} image - The reference image for video generation.
   * @param {I2VGeneraetionConfig} [config] - Optional configuration for video generation. (model: I2VGeneraetionConfig)
   * @returns {Promise<Result<Video>>} A Promise that resolves with the result of the video generation.
   */
  imageToVideo: (
    image: ImageParam,
    prompt: string,
    config?: I2VGeneraetionConfig
  ) => Promise<Result<Video>>;
}

/**
 * Creates an instance of VideoGeneration with the http client.
 *
 * @param {RequestClient} : client - The API token for authentication.
 *
 * @returns {VideoGeneration} An instance of the Imagine client with video generation functions.
 */
export const VideoGenerationHandler = (c: RequestClient): VideoGeneration => ({
  imageToVideo: imageToVideoHandler(c),
});

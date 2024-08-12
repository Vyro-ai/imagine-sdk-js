import { T2IGenerationAspectRatio } from "../enums/ratios";
import { T2IGenerationStyle } from "../enums/styles";

/**
 * Configuration options for image generation.
 *
 * @property {T2IGenerationAspectRatio} [aspectRatio] - The aspect ratio of the generated image (model: T2IGenerationAspectRatio).
 * @property {T2IGenerationStyle} [style] - The style for image generation (model: T2IGenerationStyle).
 * @property {number} [cfg] - The CFG (Controlled Feature Generation) parameter for image generation.
 * @property {string} [negativePrompt] - The negative prompt for contrasting images.
 * @property {number} [seed] - The random seed for reproducible generation.
 * @property {number} [steps] - The number of steps for generating the image.
 * @property {boolean} [highResolution=false] - The flag indicating high-resolution results.
 */
export declare type T2IGenerationConfig = {
  aspectRatio?: T2IGenerationAspectRatio;
  style?: T2IGenerationStyle;
  cfg?: number;
  negativePrompt?: string;
  seed?: number;
  steps?: number;
  highResolution?: boolean;
};

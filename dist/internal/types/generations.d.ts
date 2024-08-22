import { GenerationsAspectRatio } from "src/internal/enums/ratios";
import { GenerationsStyle } from "src/internal/enums/styles";
/**
 * Configuration options for image generation.
 *
 * @property {GenerationsAspectRatio} [aspectRatio] - The aspect ratio of the generated image (model: GenerationsAspectRatio).
 * @property {GenerationsStyle} [style=] - The style for image generation (model: GenerationsStyle).
 * @property {number} [cfg] - The CFG (Controlled Feature Generation) parameter for image generation.
 * @property {string} [negativePrompt] - The negative prompt for contrasting images.
 * @property {number} [seed] - The random seed for reproducible generation.
 * @property {number} [steps] - The number of steps for generating the image.
 * @property {boolean} [highResolution=false] - The flag indicating high-resolution results.
 */
export declare type GenerationsConfig = {
    aspectRatio?: GenerationsAspectRatio;
    style?: GenerationsStyle;
    cfg?: number;
    negativePrompt?: string;
    seed?: number;
    steps?: number;
    highResolution?: boolean;
};

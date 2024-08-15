import { RemixControl } from "src/internal/enums/controls";
import { GenerationsAspectRatio } from "src/internal/enums/ratios";
import { GenerationsStyle, RemixStyle } from "src/internal/enums/styles";
/**
 * Configuration options for image editing through AI Clothing.
 *
 * @property {string} [negativePrompt] - The negative prompt for contrasting images.
 * @property {number} [seed] - The random seed for reproducible generation.
 */
export declare type AIClothes = {
    negativePrompt?: string;
    seed?: number;
};
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
/**
 * Configuration options for remixing an image.
 *
 * @property {RemixStyle} [style] - The style for remixing (model: RemixStyle).
 * @property {number} [seed] - The random seed for reproducible remixing.
 * @property {number} [steps] - The number of steps for remixing the image.
 * @property {number} [strength] - The strength of the remixing process.
 * @property {string} [control] - The control parameter for remixing.
 * @property {number} [cfg] - The CFG (Controlled Feature Generation) parameter for remixing.
 * @property {string} [negativePrompt] - The negative prompt for contrasting images.
 */
export declare type RemixConfig = {
    style?: RemixStyle;
    seed?: number;
    steps?: number;
    strength?: number;
    control?: RemixControl;
    cfg?: number;
    negativePrompt?: string;
};

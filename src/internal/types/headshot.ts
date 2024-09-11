/**
 * Configuration options for image editing through headshot.
 *
 * @property {string} [negativePrompt] - The negative prompt for contrasting images.
 * @property {number} [seed] - The random seed for reproducible generation.
 */
export declare type HeadshotConfig = {
  negativePrompt?: string;
  seed?: number;
};

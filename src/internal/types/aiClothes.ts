/**
 * Configuration options for image editing through AI Clothing.
 *
 * @property {string} [negativePrompt] - The negative prompt for contrasting images.
 * @property {number} [seed] - The random seed for reproducible generation.
 */
export declare type AIClothesConfig = {
  negativePrompt?: string;
  seed?: number;
};

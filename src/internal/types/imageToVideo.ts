/**
 * Configuration options for image generation.
 *
 * @property {number} [fps] - The FPS (Frames Per Second) expected from the generated video.
 * @property {number} [seed] - The random seed for reproducible generation.
 * @property {float} [cfg_scale] - The CFG (Controlled Feature Generation) parameter for video generation.
 * @property {number} [steps] - The number of steps for generating the vidoe.
 */
export declare type I2VGeneraetionConfig = {
  fps?: number;
  seed?: number;
  cfg_scale?: number;
  steps?: number;
};

// * @property {number} [eta] -
// * @property {number} [fs] -

// eta: number;
// fs: number;

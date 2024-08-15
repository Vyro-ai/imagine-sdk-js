import { RemixControl } from "src/internal/enums/controls";
import { GenerationsAspectRatio } from "src/internal/enums/ratios";
import {
  GenerationsStyle,
  RemixStyle,
  VariationStyle,
} from "src/internal/enums/styles";

export const Ratios = {
  Generations: GenerationsAspectRatio,
};

export const Styles = {
  Generations: GenerationsStyle,
  Remix: RemixStyle,
  Variation: VariationStyle,
};

export const Controls = {
  Remix: RemixControl,
};

export * from "src/internal/enums/controls";
export * from "src/internal/enums/filters";
export * from "src/internal/enums/ratios";
export * from "src/internal/enums/statuses";
export * from "src/internal/enums/styles";

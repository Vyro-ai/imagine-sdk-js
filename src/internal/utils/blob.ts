import fs from "fs/promises";
import path from "path";

import { ErrDynamic, ErrNotFound } from "src/internal/errors";

import { ImageParam } from "../types/image";

const filePathToBlob = async (filePath: string): Promise<Blob> => {
  try {
    if (!path.isAbsolute(filePath)) {
      filePath = path.relative(process.cwd(), filePath);
    }

    const data = await fs.readFile(filePath);
    const arrayBuffer = new Uint8Array(data).buffer;
    const blob = new Blob([arrayBuffer], { type: "image/jpeg" });

    return blob;
  } catch (error) {
    throw ErrNotFound(`Error reading local file ${filePath}: ${error.message}`);
  }
};

const urlToBlob = async (url: string): Promise<Blob> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw ErrDynamic(
        response.status,
        `Failed to fetch image ${url}: ${response.statusText}`
      );
    }

    const blob = await response.blob();

    return blob;
  } catch (error) {
    throw ErrNotFound(`Error fetching image ${url}: ${error.message}`);
  }
};

export const toBlob = async (image: ImageParam): Promise<Blob> => {
  try {
    let blob: Blob | undefined;

    if (typeof image === "string") {
      if (image.startsWith("http") || image.startsWith("https")) {
        blob = await urlToBlob(image);
      } else {
        blob = await filePathToBlob(image);
      }
    } else {
      blob = image;
    }

    return blob;
  } catch (error) {
    throw ErrDynamic(error.status, error.message);
  }
};

export default toBlob;

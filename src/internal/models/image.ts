import fs from "fs";

export interface Image {
  blob(): Blob;
  buffer(): ArrayBuffer;
  asFile(filename: string): File;
  base64(): string;
  asImageSrc(): string;
}

export const toImage = (data: ArrayBuffer): Image => {
  const blob = (): Blob => new Blob([data], { type: "image/png" });
  const buffer = (): ArrayBuffer => data;

  const asFile = (filename: string): File => {
    fs.writeFileSync(filename, Buffer.from(data));
    return new File([data], filename, { type: "image/png" });
  };

  const base64 = (): string => Buffer.from(data).toString("base64");
  const asImageSrc = (): string => `data:image/png;base64,${base64()}`;

  return {
    base64,
    asImageSrc,
    buffer,
    blob,
    asFile,
  };
};

import fs from "fs";

export interface Video {
  blob(): Blob;
  buffer(): ArrayBuffer;
  asFile(filename: string): File;
  base64(): string;
  asVideoSrc(): string;
}

export const toVideo = (data: ArrayBuffer): Video => {
  const blob = (): Blob => new Blob([data], { type: "video/mp4" });
  const buffer = (): ArrayBuffer => data;

  const asFile = (filename: string): File => {
    fs.writeFileSync(filename, Buffer.from(data));
    return new File([data], filename, { type: "video/mp4" });
  };

  const base64 = (): string => Buffer.from(data).toString("base64");
  const asVideoSrc = (): string => `data:video/mp4;base64,${base64()}`;

  return {
    base64,
    asVideoSrc,
    buffer,
    blob,
    asFile,
  };
};

import { ErrInvalidParameter } from "../errors";

export class FormDataBuilder {
  private data: FormData;

  constructor() {
    this.data = new FormData();
  }

  integer(
    key: string,
    value: number | null | undefined,
    defaultValue?: number
  ) {
    value = value ?? defaultValue;
    if (value === null || value === undefined) {
      return this;
    }

    if (!Number.isInteger(value)) {
      throw ErrInvalidParameter(`${key} must be an integer`);
    }

    this.data.append(key, value.toString());
    return this;
  }

  float(key: string, value: number | null | undefined, defaultValue?: number) {
    value = value ?? defaultValue;
    if (value === null || value === undefined) {
      return this;
    }

    if (Number.isNaN(value)) {
      throw ErrInvalidParameter(`${key} must be a number`);
    }

    this.data.append(key, value.toString());
    return this;
  }

  string(key: string, value: string | null | undefined, defaultValue?: string) {
    value = value ?? defaultValue;
    if (value === null || value === undefined) {
      return this;
    }

    this.data.append(key, value);
    return this;
  }

  blob(key: string, value: Blob | null | undefined, defaultValue?: Blob) {
    value = value ?? defaultValue;
    if (value === null || value === undefined) {
      return this;
    }

    this.data.append(key, value);
    return this;
  }

  boolean(
    key: string,
    value: boolean | null | undefined,
    defaultValue?: boolean
  ) {
    value = value ?? defaultValue;
    if (value === null || value === undefined) {
      return this;
    }

    this.data.append(key, value.toString());

    return this;
  }

  build() {
    return this.data;
  }
}

export default FormDataBuilder;

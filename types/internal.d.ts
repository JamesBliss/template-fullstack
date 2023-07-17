export {};

declare global {
  type Maybe<T> = T | null;
  type KeyValuePair = { [key: string]: any };
}

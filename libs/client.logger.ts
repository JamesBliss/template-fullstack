// Will appear only in the console of the client.
import pino, { Logger } from "pino";

export function logger(): Logger {
  return pino({ name: "achroma-web" });
}

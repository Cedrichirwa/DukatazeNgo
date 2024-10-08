import dotenv from "dotenv";
import path from "path";
import payload from "payload";
import { InitOptions } from "payload/config";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

/* eslint-disable @typescript-eslint/no-explicit-any */
let cached = (global as any).payload;
if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

interface Args {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({ initOptions }: Args = {}) => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("Payload secret is missing");
  }

  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (e: unknown) {
    console.error("Error initializing payload:", e);
    cached.promise = null;
  }

  if (!cached.client) {
    throw new Error("Failed to initialize payload");
  }

  return cached.client;
};

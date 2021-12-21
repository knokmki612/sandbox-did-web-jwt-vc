import("dotenv").then(({ config }) => config());

export const HOSTNAME = process.env.HOSTNAME ?? "localhost";
export const PORT = Number(process.env.PORT ?? 4000);
export const HOST = `${HOSTNAME}:${PORT}`;
export const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN ?? "http://localhost:3000";

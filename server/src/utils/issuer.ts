import type { Issuer } from "did-jwt-vc";
import { fromString, toString } from "uint8arrays";
import { sign } from "@noble/ed25519";
import { HOST } from "./env";

/** Prerequisites of Creating JWTs */
const issuer = (privateKey: Uint8Array): Issuer => ({
  did: `did:web:${encodeURIComponent(HOST)}`,
  signer: async (data: string | Uint8Array): Promise<string> => {
    const dataBytes: Uint8Array =
      typeof data === "string" ? fromString(data) : data;
    const signed: Uint8Array = await sign(dataBytes, privateKey);
    return toString(signed, "base64url");
  },
  alg: "EdDSA",
});

export default issuer;

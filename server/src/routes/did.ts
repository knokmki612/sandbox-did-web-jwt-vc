import type { FastifyPluginAsync } from "fastify";
import { toString } from "uint8arrays";
import { HOST } from "../utils/env";

const did: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get("/.well-known/did.json", async function (_request, _reply) {
    const encoded = encodeURIComponent(HOST);
    const { publicKey } = fastify.randomKeyPair();
    return {
      "@context": "https://w3id.org/did/v1",
      id: `did:web:${encoded}`,
      publicKey: [
        {
          id: `did:web:${encoded}#owner`,
          type: "Ed25519VerificationKey2020",
          controller: `did:web:${encoded}`,
          publicKeyMultibase: toString(publicKey, "base64url"),
        },
      ],
      authentication: [`did:web:${encoded}`],
    };
  });
};

export default did;

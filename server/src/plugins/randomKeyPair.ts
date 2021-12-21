import fp from "fastify-plugin";
import { getPublicKey, utils } from "@noble/ed25519";

export default fp(async (fastify, _opts) => {
  const privateKey = utils.randomPrivateKey();
  const publicKey = await getPublicKey(privateKey);
  fastify.decorate("randomKeyPair", () => ({
    privateKey,
    publicKey
  }))
})

declare module "fastify" {
  export interface FastifyInstance {
    randomKeyPair(): {
      privateKey: Uint8Array,
      publicKey: Uint8Array,
    }
  }
}

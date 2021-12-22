import type { FastifyPluginAsync } from "fastify";
import type { VerifiableCredential } from "did-jwt-vc";
import type { JwtPresentationPayload } from "did-jwt-vc";
import { createVerifiablePresentationJwt } from "did-jwt-vc";
import issuer from "../../utils/issuer";

/** Create a Verifiable Presentation */
const create: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.post("/create", async function (request, _reply) {
    const vpPayload: JwtPresentationPayload = {
      vp: {
        "@context": ["https://www.w3.org/2018/credentials/v1"],
        type: ["VerifiablePresentation"],
        verifiableCredential: [request.body as VerifiableCredential],
      },
    };
    const { privateKey } = fastify.randomKeyPair();
    const vpJwt = await createVerifiablePresentationJwt(
      vpPayload,
      issuer(privateKey)
    );
    return vpJwt;
  });
};

export default create;

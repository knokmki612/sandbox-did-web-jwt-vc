import type { FastifyPluginAsync } from "fastify";
import type { JwtCredentialPayload } from "did-jwt-vc";
import { createVerifiableCredentialJwt } from "did-jwt-vc";
import issuer from "../../utils/issuer";

/** Create a Verifiable Credential */
const create: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get("/create", async function (_request, _reply) {
    const vcPayload: JwtCredentialPayload = {
      vc: {
        "@context": ["https://www.w3.org/2018/credentials/v1"],
        type: ["VerifiableCredential"],
        credentialSubject: {
          hoge: {
            fuga: "hogehoge",
          },
        },
      },
    };
    const { privateKey } = fastify.randomKeyPair();
    const vcJwt = await createVerifiableCredentialJwt(
      vcPayload,
      issuer(privateKey)
    );
    return vcJwt;
  });
};

export default create;

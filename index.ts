import { EdDSASigner } from "did-jwt";
import { Resolver } from "did-resolver";
import { getResolver } from "web-did-resolver";
import {
  Issuer,
  JwtCredentialPayload,
  createVerifiableCredentialJwt,
  JwtPresentationPayload,
  createVerifiablePresentationJwt,
  verifyCredential,
  verifyPresentation,
} from "did-jwt-vc";

/** Prerequisites of Creating JWTs */
const issuer = {
  did: "did:web:knokmki612.github.io:sandbox-did-web-jwt-vc",
  signer: EdDSASigner(process.env.PRIVATE_KEY ?? ""),
  alg: "EdDSA",
} as Issuer;

/** Prerequisites of Verifying JWTs */
const resolver = new Resolver(getResolver());

async function main() {
  /** Create a Verifiable Credential */
  const vcPayload: JwtCredentialPayload = {
    sub: "",
    nbf: NaN,
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
  const vcJwt = await createVerifiableCredentialJwt(vcPayload, issuer);
  /** Create a Verifiable Presentation */
  const vpPayload: JwtPresentationPayload = {
    vp: {
      "@context": ["https://www.w3.org/2018/credentials/v1"],
      type: ["VerifiablePresentation"],
      verifiableCredential: [vcJwt],
    },
  };
  const vpJwt = await createVerifiablePresentationJwt(vpPayload, issuer);
  /** Verifying a Verifiable Credential */
  const verifiedVC = await verifyCredential(vcJwt, resolver);
  console.log(verifiedVC);
  /** Verifying a Verifiable Presentation */
  const verifiedVP = await verifyPresentation(vpJwt, resolver);
  console.log(verifiedVP);
}

export default main;

import { Resolver } from "did-resolver";
import { getResolver } from "web-did-resolver";
import {
  verifyCredential,
  verifyPresentation,
} from "did-jwt-vc";

/** Prerequisites of Verifying JWTs */
const resolver = new Resolver(getResolver());

async function main() {
  /** Create a Verifiable Credential */
  const responseVcJwt = await fetch("http://localhost:4000/vc/create");
  const vcJwt = await responseVcJwt.text();

  /** Verifying a Verifiable Credential */
  const verifiedVc = await verifyCredential(vcJwt, resolver);
  console.log(verifiedVc);

  /** Create a Verifiable Presentation */
  const responseVpJwt = await fetch("http://localhost:4000/vp/create", {
    method: "POST",
    body: JSON.stringify(verifiedVc.verifiableCredential),
    headers: {'Content-Type': 'application/json'}
  });
  const vpJwt = await responseVpJwt.text();

  /** Verifying a Verifiable Presentation */
  const verifiedVp = await verifyPresentation(vpJwt, resolver);
  console.log(verifiedVp);
}

main();

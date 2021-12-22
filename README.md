# Sandbox of DID(:web)(:jwt)(:jwt-vc)

## Requirements

Please prepare TLS certificate by [mkcert](https://github.com/FiloSottile/mkcert) or other tools for running local HTTPS server. web:did method does not define a case of resolving through http connection.

## Usage

Place cert files to `server/dist`, dotenv to `server/.env` like this:

```
KEY=<certificate-key-path>
CERT=<certificate-path>
```


Then start dev server by `yarn dev`

## Related Docs

- [did:web Method Specification](https://w3c-ccg.github.io/did-method-web/)
- [Ed25519 Signature 2020](https://w3c-ccg.github.io/lds-ed25519-2020/)
- [Web DID Resolver](https://github.com/decentralized-identity/web-did-resolver/blob/master/README.md)
- [did-jwt](https://github.com/decentralized-identity/did-jwt/blob/master/README.md)
- [did-jwt-vc](https://github.com/decentralized-identity/did-jwt-vc/blob/master/README.md)

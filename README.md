# Sandbox of DID(:web)(:jwt)(:jwt-vc)

- No specifying directory hierarchy
- CI (Lint / Test / Format) ready
- Library update automation ready
- Configure with recommended presets as possible

## Usage

```shell
$ ssh-keygen -t ed25519 -f id_ed25519
$ echo "PRIVATE_KEY=$(cat ./id_ed25519 | head -n -1 | tail -n +2 | tr -d '\n')" >> .env
```

## Related Docs

- [did:web Method Specification](https://w3c-ccg.github.io/did-method-web/)
- [Ed25519 Signature 2020](https://w3c-ccg.github.io/lds-ed25519-2020/)
- [Web DID Resolver](https://github.com/decentralized-identity/web-did-resolver/blob/master/README.md)
- [did-jwt](https://github.com/decentralized-identity/did-jwt/blob/master/README.md)
- [did-jwt-vc](https://github.com/decentralized-identity/did-jwt-vc/blob/master/README.md)

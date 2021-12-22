// This file contains code that we reuse between our tests.
import Fastify from "fastify";
import fp from "fastify-plugin";
import App from "../src/app";

// Fill in this config with all the configurations
// needed for testing the application
async function config() {
  return {};
}

// Automatically build and tear down our instance
function build() {
  const app = Fastify();

  beforeAll(async () => {
    // fastify-plugin ensures that all decorators
    // are exposed for testing purposes, this is
    // different from the production setup
    void app.register(fp(App), await config());

    await app.ready();
  });

  afterAll(() => {
    // Tear down our app after we are done
    void app.close();
  });

  return app;
}

export { config, build };

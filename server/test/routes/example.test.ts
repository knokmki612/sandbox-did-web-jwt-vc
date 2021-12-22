import { build } from "../helper";

const app = build();

test("example is loaded", async () => {
  const res = await app.inject({
    url: "/example",
  });

  expect(res.payload).toBe("this is an example");
});

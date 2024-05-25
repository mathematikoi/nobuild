import { build } from "bun";

await build({
  entrypoints: ["./source/code.js"],
  outdir: "build/bun",
});

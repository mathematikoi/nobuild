import { defineConfig } from "vite";
import { resolve } from "path"

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "source/code.js"),
            name: 'code',
        },
        outDir: "build/vite"
    },
});

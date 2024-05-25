import path from "path";
export default {
    entry: "./source/code.js",
    output: {
        path: path.resolve(import.meta.dirname, "build/webpack"),
    }
}
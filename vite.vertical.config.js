import { templateVersion } from "./src/version.js";

export default {
    build: {
        lib: {
            entry: "src/vertical.js",
            name: "KSVertical",
            formats: ["umd"],
            fileName: () => `${templateVersion}/ksvertical.js`
        },
        outDir: "Public",
        emptyOutDir: false
    }
};
import { templateVersion } from "./src/version.js";

export default {
    build: {
        lib: {
            entry: "src/table.js",
            name: "KSTable",
            formats: ["umd"],
            fileName: () => `${templateVersion}/kstable.js`
        },
        outDir: "Public",
        emptyOutDir: false
    }
};
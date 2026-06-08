import fs from "fs";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.join(
    __dirname,
    "..",
    "template"
);

// console.log("templatePath : -------------", templatePath);

const versions = fs
    .readdirSync(templatePath)
    .filter(item => item.startsWith("v"));

// console.log("versions : -------------", versions);

const highestVersion1 =
    versions.sort().at(-1);

const highestVersion =
    versions.reduce((max, current) =>
        Number(current.slice(1)) > Number(max.slice(1))
            ? current
            : max
    );

// console.log("highestVersion : -------------", highestVersion);

const sourceVersion =
    highestVersion;

export default sourceVersion;
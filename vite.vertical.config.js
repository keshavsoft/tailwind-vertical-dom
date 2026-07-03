import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const verticalDir = path.resolve(__dirname, 'bin/vertical');

function getLatestVersionCombination() {
    if (!fs.existsSync(verticalDir)) return null;

    const outerVersions = fs.readdirSync(verticalDir)
        .filter(name => /^v\d+$/.test(name))
        .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));

    const outer = outerVersions.at(-1);
    if (!outer) return null;

    const templateDir = path.join(verticalDir, outer, 'commands/vertical/template');
    if (!fs.existsSync(templateDir)) return null;

    const innerVersions = fs.readdirSync(templateDir)
        .filter(name => /^v\d+$/.test(name))
        .sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));

    const inner = innerVersions.at(-1);
    if (!inner) return null;

    const entryPath = path.join(templateDir, inner, 'entry.js');
    if (fs.existsSync(entryPath)) {
        return { outer, inner, entryPath };
    }
    return null;
}

const latest = getLatestVersionCombination() || {
    outer: 'v2',
    inner: 'v6',
    entryPath: path.resolve(__dirname, 'bin/vertical/v2/commands/vertical/template/v6/entry.js')
};

const outerNum = latest.outer.slice(1);
const innerNum = latest.inner.slice(1);
const versionStr = `v${outerNum}.${innerNum}`;

const replaceVersionPlugin = {
    name: 'replace-version',
    transform(code, id) {
        const targetPath = path.resolve(__dirname, 'src/vertical.js');
        if (path.resolve(id) === targetPath) {
            const oldVersion = '"v2.6"';
            const newVersion = JSON.stringify(versionStr);
            return {
                code: code.replace(oldVersion, newVersion),
                map: null
            };
        }
    }
};

export default {
    plugins: [replaceVersionPlugin],
    publicDir: false,
    build: {
        lib: {
            entry: "src/vertical.js",
            name: "KSVertical",
            formats: ["umd"],
            fileName: () => "ksvertical.js"
        },
        outDir: "dist",
        emptyOutDir: false
    },
    resolve: {
        alias: {
            '../bin/vertical/v2/commands/vertical/template/v6/entry.js': latest.entryPath
        }
    }
};
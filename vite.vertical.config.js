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
        return { outer, inner, entryPath, type: 'entry' };
    }

    const aiPath = path.join(templateDir, inner, 'ai.js');
    if (fs.existsSync(aiPath)) {
        return { outer, inner, entryPath: aiPath, type: 'ai' };
    }

    return null;
}

const latest = getLatestVersionCombination() || {
    outer: 'v2',
    inner: 'v6',
    entryPath: path.resolve(__dirname, 'bin/vertical/v2/commands/vertical/template/v6/entry.js'),
    type: 'entry'
};

const outerNum = latest.outer.slice(1);
const innerNum = latest.inner.slice(1);
const versionStr = `v${outerNum}.${innerNum}`;

const entryPlugin = {
    name: 'vertical-entry-plugin',
    load(id) {
        const normalizedId = path.resolve(id).toLowerCase().replace(/\\/g, '/');
        const targetId = path.resolve(__dirname, 'index.js').toLowerCase().replace(/\\/g, '/');
        if (normalizedId === targetId) {
            const normalizedEntryPath = latest.entryPath.replace(/\\/g, '/');
            if (latest.type === 'ai') {
                return `
import KSAiVertical from "${normalizedEntryPath}";

const initCreate = async (cfg) => {
    const table = new KSAiVertical(cfg);
    await table.initCreate();
    return table;
};

(async () => {
    window.KSVerticalVersion = "${versionStr}";

    window.KSVertical = {};

    window.KSVertical.initCreate = initCreate;
})();
`;
            } else {
                return `
import { initCreate } from "${normalizedEntryPath}";

(async () => {
    window.KSVerticalVersion = "${versionStr}";

    window.KSVertical = {};

    window.KSVertical.initCreate = initCreate;
})();
`;
            }
        }
    },
    transform(code, id) {
        const normalizedId = path.resolve(id).toLowerCase().replace(/\\/g, '/');
        const resolvedTemplateDir = path.join(verticalDir, latest.outer, 'commands/vertical/template', latest.inner).toLowerCase().replace(/\\/g, '/');
        if (normalizedId.startsWith(resolvedTemplateDir) && normalizedId.endsWith('/ai.js')) {
            const targetVersion = `${outerNum}.${innerNum}`;
            const updatedCode = code.replace(/verticalVersion\s*=\s*"[^"]+"/, `verticalVersion = "${targetVersion}"`);
            return {
                code: updatedCode,
                map: null
            };
        }
    }
};

export default {
    plugins: [entryPlugin],
    publicDir: false,
    build: {
        lib: {
            entry: "index.js",
            name: "KSVertical",
            formats: ["umd"],
            fileName: () => "ksvertical.js"
        },
        outDir: `dist/${versionStr}`,
        emptyOutDir: false
    }
};
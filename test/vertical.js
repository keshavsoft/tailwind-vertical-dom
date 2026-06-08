import getLatestVersion from "../bin/core/getLatestVersion.js";

const commandToSend = "vertical";

const load = async () => {
    const v = getLatestVersion();

    return import(`../bin/${commandToSend}/v2/commands/${commandToSend}.js`);
};

const startFunc = async () => {
    const { default: run } = await load();

    const folderName = process.argv[2];

    const showLog = process.argv[3] === "true";

    run({
        folderName,
        showLog
    });
};

startFunc().then();
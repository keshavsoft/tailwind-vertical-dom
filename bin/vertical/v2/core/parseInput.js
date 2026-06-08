export default function parseInput() {
    const [folderName, showLog] = process.argv.slice(2);

    return {
        folderName: folderName || null,
        showLog: showLog || null,
        toPath: process.cwd()
    };
};
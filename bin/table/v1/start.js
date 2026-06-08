import parseInput from "./core/parseInput.js";
import showUsage from './core/showUsage.js';

// import resolveCommand from "./core/resolveCommand.js";
import tableCommand from "./commands/table.js";

import pkg from '../../../package.json' with { type: 'json' };

const version = pkg.version;

const run = async () => {
  const input = parseInput();

  if (input.action === "--help" || input.action === "-h" || input.action === "help") return showUsage(version);

  await tableCommand({
    folderName: input.folderName,
    showLog: input.showLog
  });
};

export default run;
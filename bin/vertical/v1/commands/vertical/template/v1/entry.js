import { KSAiTable } from "./ai.js";

export const initCreate = async (cfg) => {
    // debugger;
    const table = new KSAiTable(cfg);
    await table.initCreate();   // ✅ THIS is missing
    return table;
};

// v1.1
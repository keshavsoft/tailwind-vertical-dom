import KSAiVertical from "./ai.js";

const initCreate = async (cfg) => {
    // debugger;
    const table = new KSAiVertical(cfg);
    await table.initCreate();   // ✅ THIS is missing
    return table;
};

window.KSVertical = {};
window.KSVertical.initCreate = initCreate;

export { initCreate };

// v2.3


import { saveFooterRow } from "../saveFooterRow.js";

const startFunc = (inOptions) => {
    const localFunction = async (inEvent) => {
        const localTr = inEvent.target.closest("tr");

        await saveFooterRow({
            tr: localTr,
            inDataStore: inOptions.inDataStore,
            inDom: inOptions.inDom,
            inServices: inOptions.inServices,
            inEndPoints: inOptions.inEndPoints,
            inContainerEl: inOptions.inContainerEl,
            inOptions: inOptions.inOptions,
            inColumnsConfig: inOptions.inColumnsConfig,
            inVisibleColumns: inOptions.inVisibleColumns,
            inShowActions: inOptions.inShowActions,
            inShowSerial: inOptions.inShowSerial,
            inShowTable: inOptions.inShowTable,
            inToSaveRow: inOptions.inToSaveRow
        });
    };

    return localFunction;
};

export { startFunc };
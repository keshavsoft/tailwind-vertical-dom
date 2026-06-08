import { saveFooterRow } from "../saveFooterRow.js";

const startFunc = (inData) => {
    const localFunction = async (inEvent) => {
        const localTr = inEvent.target.closest("tr");

        await saveFooterRow({
            tr: localTr,
            inDataStore: inData.inDataStore,
            inDom: inData.inDom,
            inServices: inData.inServices,
            inEndPoints: inData.inEndPoints,
            inContainerEl: inData.inContainerEl,
            inOptions: inData.inOptions,
            inColumnsConfig: inData.inColumnsConfig,
            inVisibleColumns: inData.inVisibleColumns,
            inShowActions: inData.inShowActions,
            inShowSerial: inData.inShowSerial,
            inShowTable: inData.inShowTable,
            inToSaveRow: inData.inToSaveRow
        });
    };

    return localFunction;
};

export { startFunc };
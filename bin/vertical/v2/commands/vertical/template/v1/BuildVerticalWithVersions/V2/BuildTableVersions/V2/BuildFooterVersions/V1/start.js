import { startFunc as createFooterRow } from "./CreateFooterRow/start.js";
import { saveFooterRow } from "./saveFooterRow.js";

const buildFooter = ({ inDataStore, inContainerEl, inDom, inServices, inOptions, inEndPoints, inColumnsConfig }) => {
    const handleSave = async (e) => {
        const tr = e.target.closest("tr");

        await saveFooterRow({
            tr,
            inDataStore,
            inDom,
            inServices,
            inEndPoints,
            inContainerEl,
            inOptions,
            inColumnsConfig
        });
    };

    const columns = inDataStore.getColumns();
    // debugger;
    const tr = createFooterRow({
        keys: columns,
        options: {
            showSerial: inOptions.table.showSerial,
            showDataList: inOptions.table.footer.showDataList,
            inColumnsConfig,
            onSave: handleSave
        }
    });

    const tableFooter = inDom.getTableFooter(inContainerEl);
    tableFooter.appendChild(tr);
};

export { buildFooter };

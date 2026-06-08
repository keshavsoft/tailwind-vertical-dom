import { startFunc as createFooterRow } from "./CreateFooterRow/start.js";
import { saveFooterRow } from "./saveFooterRow.js";

const buildFooter = ({ inDataStore, inContainerEl, inDom, inServices, inOptions, inEndPoints, inColumnsConfig,
    inVisibleColumns, inShowSerial, inDefaultRow, inTdClass, inSerialClass, inShowActions, inShowTable
}) => {
    const defaultObject = inDataStore.getDefaultRow();
    const visibleColumns = inVisibleColumns;
    const defaultRow = inDefaultRow;
    // debugger;
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
            inColumnsConfig,
            inVisibleColumns: visibleColumns,
            inDefaultObject: defaultObject,
            inShowActions,
            inShowSerial, inShowTable
        });
    };

    const tr = createFooterRow({
        keys: visibleColumns,
        options: {
            showSerial: inOptions.table.showSerial,
            showDataList: inOptions.table.footer.showDataList,
            inColumnsConfig,
            onSave: handleSave
        },
        inDefaultRow: defaultRow,
        inTdClass, inSerialClass
    });

    const tableFooter = inDom.getTableFooter(inContainerEl);
    tableFooter.appendChild(tr);
};

export { buildFooter };

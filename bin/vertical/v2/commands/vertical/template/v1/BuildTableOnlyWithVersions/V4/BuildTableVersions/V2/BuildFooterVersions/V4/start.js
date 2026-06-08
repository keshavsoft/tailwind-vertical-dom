import { startFunc as createFooterRow } from "./CreateFooterRow/start.js";
import { saveFooterRow } from "./saveFooterRow.js";

const buildFooter = ({ inDataStore, inContainerEl, inDom, inServices, inOptions, inEndPoints, inColumnsConfig,
    inVisibleColumns, inShowSerial, inDefaultRow, inTdClass, inSerialClass, inShowActions, inShowTable,
    inToSaveRow
}) => {
    const defaultObject = inDataStore.getDefaultRow();
    const visibleColumns = inVisibleColumns;
    const defaultRow = inDefaultRow;
    const toSaveRow = inToSaveRow;

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
            inShowActions,
            inShowSerial, inShowTable,
            inToSaveRow
        });
    };

    const handleOnChange = (e) => {
        const localCurrentTarget = e.currentTarget;
        const localCurrentValue = localCurrentTarget.value;
        const localDataListSource = localCurrentTarget.dataset.dataListSource;
        const toFindColumn = localDataListSource.split(".")[1];

        const dataListItems = inDataStore.getDataList(localCurrentTarget.name);

        const findRow = dataListItems.find(element => {
            return element[toFindColumn] === localCurrentValue;
        });

        const dataListColumns = inColumnsConfig.filter(element => {
            return "dataListColumn" in element
        });

        for (const [key, value] of Object.entries(findRow)) {
            const findDataListItems = dataListColumns.find(element => {
                return element.dataListColumn === key;
            });

            if (findDataListItems) {
                toSaveRow[findDataListItems.columnName] = value;
            };
        };
    };

    // debugger;
    const tr = createFooterRow({
        keys: visibleColumns,
        options: {
            showSerial: inOptions.table.showSerial,
            showDataList: inOptions.table.footer.showDataList,
            inColumnsConfig,
            onSave: handleSave,
            onChangeFunc: handleOnChange
        },
        inDefaultRow: defaultRow,
        inTdClass, inSerialClass
    });

    const tableFooter = inDom.getTableFooter(inContainerEl);
    tableFooter.appendChild(tr);
};

export { buildFooter };

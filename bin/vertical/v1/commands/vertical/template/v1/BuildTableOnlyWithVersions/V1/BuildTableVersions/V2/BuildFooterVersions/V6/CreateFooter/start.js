import { startFunc as createFooterRow } from "../CreateFooterRow/start.js";

const startFunc = ({
    inData,
    localVisibleColumns,
    localHandleSave,
    localHandleOnChange
}) => {
    const localTr = createFooterRow({
        keys: localVisibleColumns,
        options: {
            showSerial: inData.inOptions.table.showSerial,
            showDataList: inData.inOptions.table.footer.showDataList,
            inColumnsConfig: inData.inColumnsConfig,
            onSave: localHandleSave,
            onChangeFunc: localHandleOnChange
        },
        inDefaultRow: inData.inDefaultRow,
        inTdClass: inData.inTdClass,
        inSerialClass: inData.inSerialClass
    });

    return localTr;
};

export { startFunc };
const startFunc = ({
    inCol,
    inDefaultRow,
    inDataStore, inDataListFillName
}) => {
    const col = inCol.columnName;
    let row = document.createElement("ks-input");

    const defaultValue = col in inDefaultRow ? inDefaultRow[col] : "";

    row.setAttribute("label", inCol.title);
    row.setAttribute("ksName", col);
    row.setAttribute("source", col);

    if (defaultValue) row.setAttribute("ksInValue", defaultValue);

    if ("allowOnChange" in inCol?.verticalConfig) row.setAttribute("ksAllowOnChange", inCol?.verticalConfig?.allowOnChange);
    if ("onKeyDownType" in inCol?.verticalConfig) row.setAttribute("ksOnKeyDownType", inCol?.verticalConfig?.onKeyDownType);

    if (inDataListFillName) row.setAttribute("ksDataListFillName", inDataListFillName);

    row.dataStore = inDataStore;

    return row;
};

export default startFunc;
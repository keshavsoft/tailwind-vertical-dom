export const getDomManipulation = () => {

    const getTableHeader = (tableContainer) => {
        return tableContainer.querySelector(".theadClass");
    };

    const getTableFooter = (tableContainer) => {
        return tableContainer.querySelector(".tfootClass");
    };

    const getTableBody = (tableContainer) => {
        return tableContainer.querySelector(".tbodyClass");
    };

    const getSearchInput = (tableContainer) => {
        return tableContainer.querySelector(".tableSearchClass");
    };

    const getSearchSingleColumnInput = (tableContainer) => {
        return tableContainer.querySelector(".tableSearchSingleColumnClass");
    };

    const getTableNameClass = (tableContainer) => {
        return tableContainer.querySelector(".tableNameClass");
    };

    const getDataListContainerClass = (tableContainer) => {
        return tableContainer.querySelector(".dataListContainerClass");
    };

    const getFirstRowClass = (tableContainer) => {
        return tableContainer.querySelector(".firstRowClass");
    };

    const getInputValueFromRow = (tr, key) => {
        return tr.querySelector(`[name="${key}"]`)?.value || "";
    };

    return {
        getTableHeader, getTableBody, getSearchInput,
        getSearchSingleColumnInput,
        getTableNameClass, getTableFooter, getDataListContainerClass,
        getInputValueFromRow, getFirstRowClass
    };
};

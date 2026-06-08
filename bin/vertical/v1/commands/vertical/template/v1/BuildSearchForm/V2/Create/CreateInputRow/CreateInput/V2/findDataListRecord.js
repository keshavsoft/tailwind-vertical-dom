const findDataListRecord = ({ input, inDataStore }) => {
    const dataListSource = input.dataset.dataListSource;

    if (!dataListSource || !inDataStore) return;

    const [dataListName, matchKey] = dataListSource.split(".");

    if (!dataListName || !matchKey) return;

    const dataListArray = inDataStore.getDataList(dataListName) || [];

    return dataListArray.find(element => {
        return element[matchKey] === input.value;
    });
};

export { findDataListRecord };
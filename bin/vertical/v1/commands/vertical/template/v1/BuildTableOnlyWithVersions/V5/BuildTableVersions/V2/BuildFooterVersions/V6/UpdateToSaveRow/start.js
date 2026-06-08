const startFunc = ({ inColumnsConfig, inFindRow, inToSaveRow }) => {
    const localDataListColumns = inColumnsConfig.filter((element) => {
        return "dataListColumn" in element;
    });

    for (const [key, value] of Object.entries(inFindRow)) {
        const localFindDataListItem = localDataListColumns.find((element) => {
            return element.dataListColumn === key;
        });

        if (localFindDataListItem === undefined) continue;

        inToSaveRow[localFindDataListItem.columnName] = value;
    };
};

export { startFunc };
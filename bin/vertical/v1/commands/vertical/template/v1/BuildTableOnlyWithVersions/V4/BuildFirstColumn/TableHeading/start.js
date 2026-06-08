const renderTableHeading = ({ inDataStore, inContainerEl, inDom }) => {
    const dataStore = inDataStore;
    const containerEl = inContainerEl;
    const dom = inDom;

    const tableName = dataStore.getTableName();

    const find = dom.getTableNameClass(containerEl);
    if (!find) return;

    find.innerHTML = tableName;
};

export { renderTableHeading };
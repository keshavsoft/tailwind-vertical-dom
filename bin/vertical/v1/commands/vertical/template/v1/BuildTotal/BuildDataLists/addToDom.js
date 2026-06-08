const getSourceData = ({ cfg, inDataStore }) => {
    if (!cfg.dataListSource) return [];
    
    const [source, key] = cfg.dataListSource.split(".");

    // 🔥 get endpoint map
    const endpoints = inDataStore.getAllDataLists();

    const endpointKey = endpoints?.[source];

    if (!endpointKey) return [];
debugger;
    // 🔥 now fetch actual data using endpointKey
    const data = inDataStore.getDataList(source) || [];

    if (!key) return data;

    return data.map(r => r?.[key]);
};

const getUniqueValues = (data) => {
    return [...new Set(data.filter(Boolean))];
};

const createDataListEl = (col, values) => {
    const datalist = document.createElement("datalist");
    datalist.id = col + "List";

    datalist.innerHTML = values
        .map(v => `<option value="${v}">`)
        .join("");

    return datalist;
};

const buildDataLists = ({
    inContainerEl,
    inDataStore,
    inDom,
    inData
}) => {

    const containerEl = inContainerEl;
    const dom = inDom;

    const configs = inDataStore.getDataListColumns();

    const find = dom.getDataListContainerClass(containerEl);
    if (!find) return;

    find.innerHTML = "";

    configs.forEach(cfg => {
        const col = cfg.columnName;

        // 🔥 CORE FIX
        const sourceData = getSourceData({ cfg, inDataStore, inData });
        debugger;
        const values = getUniqueValues(sourceData);

        const datalist = createDataListEl(col, values);

        find.appendChild(datalist);
    });
};

export { buildDataLists };
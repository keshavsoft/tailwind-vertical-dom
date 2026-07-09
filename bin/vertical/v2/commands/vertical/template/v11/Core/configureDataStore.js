import { prepareColumnsBundle } from "../Utils/prepareColumnsBundle.js";

export const configureDataStore = ({ dataStore, columnsConfig }) => {
    const bundle = prepareColumnsBundle(columnsConfig);

    dataStore.setColumns(bundle.keys);
    dataStore.setVisibleColumns(bundle.visibleColumns);
    dataStore.setVisibleConfig(bundle.visibleConfig);
    dataStore.setDefaultRow(bundle.defaultRow);
    dataStore.setDataListColumns(bundle.dataListColumns);
    dataStore.setToSaveRow(bundle.toSaveRow);
    dataStore.setSearchableColumnsConfig(bundle.searchableColumnsConfig);

    return bundle;
};

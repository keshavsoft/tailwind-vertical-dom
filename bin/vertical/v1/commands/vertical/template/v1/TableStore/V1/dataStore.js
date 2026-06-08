export const createDataStore = () => {
    let data = [];
    let searchConfig = { type: "global", value: "" };

    return {
        setData: (inData) => { data = inData; },
        getData: () => data,
        setSearchConfig: (config) => { searchConfig = config; },
        getSearchConfig: () => searchConfig,
        getFinalData: () => {
            let result = [...data];
            if (searchConfig.value || searchConfig.filters?.length) {
                if (searchConfig.type === "global") {
                    result = result.filter(row =>
                        Object.values(row).some(val =>
                            val != null && String(val).includes(searchConfig.value)
                        )
                    );
                }
                if (searchConfig.type === "column") {
                    result = result.filter(row =>
                        row[searchConfig.key] != null &&
                        String(row[searchConfig.key]).includes(searchConfig.value)
                    );
                }
                if (searchConfig.type === "multi") {
                    result = result.filter(row =>
                        searchConfig.filters.every(f =>
                            row[f.key] != null &&
                            String(row[f.key]).includes(f.value)
                        )
                    );
                }
            }
            return result;
        }
    };
};
import { pureBuildBody } from "../../BuildTableVersions/V2/BuildBodyVersions/V1/pureBuildBody.js";

let timer;

const inputFuncToRun = ({ e, inDataStore, inVisibleColumns, inContainerEl, inDom, inOptions }) => {
    const columns = inVisibleColumns;

    clearTimeout(timer);

    timer = setTimeout(() => {
        const searchValue = e.target.value;

        // 1. global search
        inDataStore.setSearchConfig({
            type: "global",
            value: searchValue
        });

        const dataToShow = inDataStore.getFinalData();
debugger;
        pureBuildBody({
            inContainerEl,
            inVisibleColumns: columns,
            inData: dataToShow,
            inDom,
            searchValue,
            options: {
                showActions: inOptions?.table?.showRowOptions,
                showSerial: inOptions?.table.showSerial,
                onEdit: ({ item }) => console.log("edit", item),
                onDelete: ({ index }) => console.log("delete", index)
            }
        });
    }, 300);
};

export { inputFuncToRun };

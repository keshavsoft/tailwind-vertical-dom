import { buildBodyAtThatState } from "./atThatState.js";

let timer;

const transform = (inSearchValue) => {
    const splitColumns = inSearchValue.split(",");

    return splitColumns.map(element => {
        const splitValues = element.split(":");

        return {
            key: splitValues[0],
            value: splitValues[1]
        };
    });
};

const inputFuncToRun = ({ e, inDataStore, inColumns, inContainerEl, inDom }) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        const searchValue = e.target.value;
        const splitColumns = transform(searchValue);

        // 3. multi column
        inDataStore.setSearchConfig({
            type: "multi",
            filters: splitColumns
        });

        // 2. Re-render UI
        const dataToShow = inDataStore.getFinalData();
        buildBodyAtThatState({
            inColumns,
            inDataToShow: dataToShow,
            inContainerEl, inDom
        });

    }, 300);
};

export { inputFuncToRun };

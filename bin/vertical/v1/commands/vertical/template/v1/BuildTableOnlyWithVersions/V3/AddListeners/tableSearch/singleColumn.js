import { buildBodyAtThatState } from "./atThatState.js";

let timer;

const inputFuncToRun = ({ e, inDataStore, inColumns, inContainerEl, inDom }) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        const searchValue = e.target.value;
        const splitValues = searchValue.split(":");

        // 2. single column search
        inDataStore.setSearchConfig({
            type: "column",
            key: splitValues[0],
            value: splitValues[1]
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

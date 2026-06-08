import { startFunc as updateToSaveRow } from "../UpdateToSaveRow/start.js";

const startFunc = (inData) => {
    const localFunction = (inEvent) => {
        const localCurrentTarget = inEvent.currentTarget;

        const localCurrentValue = localCurrentTarget.value;

        const localDataListSource = localCurrentTarget.dataset.dataListSource;

        const localToFindColumn = localDataListSource.split(".")[1];

        const localDataListItems =
            inData.inDataStore.getDataList(localCurrentTarget.name);

        const localFindRow = localDataListItems.find((element) => {
            return element[localToFindColumn] === localCurrentValue;
        });

        if (localFindRow === undefined) return;

        updateToSaveRow({
            inColumnsConfig: inData.inColumnsConfig,
            inFindRow: localFindRow,
            inToSaveRow: inData.inToSaveRow
        });
    };

    return localFunction;
};

export { startFunc };
import { startFunc as updateToSaveRow } from "../UpdateToSaveRow/start.js";

const startFunc = ({
    inDataStore,
    inColumnsConfig,
    inToSaveRow
}) => {
    const localFunction = (inEvent) => {
        console.log("inEvent : ", inEvent);
        const localCurrentTarget = inEvent.currentTarget;
        const inputName = localCurrentTarget.name;
        debugger;
        const localCurrentValue = localCurrentTarget.value;

        const localFindRow = findRow({
            dataStoreName: inputName,
            inDataListSource: localCurrentTarget.dataset.dataListSource,
            inValueToFind: localCurrentValue,
            inDataStore
        });
        console.log("11111111 : ", localFindRow);
        if (localFindRow === undefined) return;
        console.log("inToSaveRow : ", inToSaveRow);

        updateToSaveRow({
            inColumnsConfig,
            inFindRow: localFindRow,
            inToSaveRow
        });
        console.log("inToSaveRow : ", inToSaveRow);
    };

    return localFunction;
};

const findRow = ({ dataStoreName, inDataListSource, inValueToFind, inDataStore }) => {
    const localDataListItems =
        inDataStore.getDataList(dataStoreName);

    const localDataListSource = inDataListSource;

    const localToFindColumn = localDataListSource.split(".")[1];

    const localFindRow = localDataListItems.find((element) => {
        return element[localToFindColumn] === inValueToFind;
    });

    return localFindRow;
};

export { startFunc };
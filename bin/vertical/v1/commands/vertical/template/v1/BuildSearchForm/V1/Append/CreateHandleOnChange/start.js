const startFunc = ({ inGetDataLists }) => {
    return (inEvent) => {
        const localFieldSet = getFieldSet(inEvent);
        const localFindRow = getFindRow({ inEvent, inGetDataLists });

        if (localFindRow === undefined) return;

        updateInputs({
            inFieldSet: localFieldSet,
            inFindRow: localFindRow
        });
    };
};

const getFieldSet = (inEvent) => {
    return inEvent.currentTarget.closest("fieldset.verticalForm");
};

const getFindRow = ({ inEvent, inGetDataLists }) => {
    const localCurrentTarget = inEvent.currentTarget;

    return findRow({
        inDataListSource: localCurrentTarget.dataset.dataListSource,
        inValueToFind: localCurrentTarget.value,
        inGetDataLists
    });
};

const updateInputs = ({ inFieldSet, inFindRow }) => {
    Object.entries(inFindRow).forEach(([key, value]) => {
        const localInput = inFieldSet.querySelector(`[name="${key}"]`);

        if (localInput) localInput.value = value;
    });
};

const findRow = ({
    inDataListSource,
    inValueToFind,
    inGetDataLists
}) => {
    const localToFindDataListKey =
        inDataListSource.split(".")[0];

    const localToFindColumn =
        inDataListSource.split(".")[1];

    const localDataListItems =
        inGetDataLists(localToFindDataListKey);

    return localDataListItems.find((element) => {
        return element[localToFindColumn] === inValueToFind;
    });
};

export { startFunc };
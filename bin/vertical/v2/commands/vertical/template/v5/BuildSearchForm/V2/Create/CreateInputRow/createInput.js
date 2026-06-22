// createInput.js

const createInput = ({
    col,
    inputClass = 'flex-1 border rounded px-3 py-2',
    value,
    inShowDataList,
    isDate,
    defaultToday,
    isReadonly,
    autoFocus,
    isSearch,
    onChangeFunc,
    inDataListSource,
    inDataStore
}) => {
    // debugger;
    const input = document.createElement("input");

    input.className = inputClass;
    input.name = col;

    if (value !== undefined) {
        input.dataset.defaultValue = value ?? "";
    };

    input.value = value ?? "";

    if (inShowDataList) {
        input.setAttribute("list", `${col}List`);
        input.dataset.dataListSource = inDataListSource;

        if (onChangeFunc) {
            input.addEventListener(
                "change",
                onChangeFunc
            );
        } else {
            input.addEventListener(
                "change",
                (event) => {
                    const currentInput = event.currentTarget;
                    const value = currentInput.value;
                    const localDataListSource = currentInput.dataset.dataListSource;

                    const closestkSTableContainer = currentInput.closest("#kSTableContainer");
                    const closestVerticalForm = currentInput.closest(".verticalForm");

                    const childDataListContainerClass = closestkSTableContainer.querySelector(".dataListContainerClass");

                    const dataListArray = inDataStore.getDataList(localDataListSource.split(".")[0]);

                    const localFind = dataListArray.find(element => {
                        return element[localDataListSource.split(".")[1]] === value;
                    });

                    if (localFind) {
                        Object.entries(localFind).forEach(([key, value]) => {
                            const input = closestVerticalForm.querySelector(`[name="${key}"]`);

                            if (input) {
                                input.value = value ?? "";
                                input.dispatchEvent(new Event("change", { bubbles: true }));
                            }
                        });
                    };
                }
            );
        };
        // debugger

    };

    if (isDate) {
        input.setAttribute("type", "date");
    };

    if (isDate && defaultToday) {
        input.valueAsDate = new Date();
    };

    if (isReadonly) {
        input.readOnly = true;
    };

    if (autoFocus) {
        input.autofocus = true;
    };

    if (isSearch) {
        input.setAttribute("type", "search");
    };

    return input;
};

export { createInput };
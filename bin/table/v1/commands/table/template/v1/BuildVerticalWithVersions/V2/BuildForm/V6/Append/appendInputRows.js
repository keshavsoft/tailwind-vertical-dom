import { createInputRow } from "../Create/CreateInputRow/createInputRow.js";
import { startFunc as createHandleOnChange } from "./CreateHandleOnChange/start.js";

const appendInputRows = ({
    inFieldset,
    inVisibleColumnsConfig,
    inDefaultRow,
    inInputs,
    inUiClasses,
    inGetDataLists
}) => {
    // debugger
    const localHandleOnChange = createHandleOnChange({
        inGetDataLists,
        inColumnsConfig: inVisibleColumnsConfig
    });

    // debugger;
    inVisibleColumnsConfig.forEach(localColumn => {
        appendInputRow({
            inFieldset,
            inColumn: localColumn,
            inDefaultRow,
            inInputs,
            inUiClasses,
            isDate: localColumn.isDate,
            defaultToday: localColumn.defaultToday,
            isReadonly: localColumn.isReadonly,
            autoFocus: localColumn.autoFocus,
            isSearch: localColumn.isSearch,
            onChangeFunc: localHandleOnChange,
            inDataListSource: localColumn.dataListSource
        });
    });
};

const appendInputRow = ({
    inFieldset,
    inColumn,
    inDefaultRow,
    inInputs,
    inUiClasses,
    isDate,
    defaultToday,
    isReadonly,
    autoFocus,
    isSearch,
    onChangeFunc,
    inDataListSource
}) => {

    const localRow = createInputRow({
        inCol: inColumn,
        inDefaultRow,
        inInputs,
        inInputClass: inUiClasses.inputClass,
        inRowClass: inUiClasses.rowClass,
        inLabelClass: inUiClasses.labelClass,
        isDate,
        defaultToday,
        isReadonly,
        autoFocus,
        isSearch,
        onChangeFunc,
        inDataListSource
    });

    inFieldset.appendChild(localRow);
};

export { appendInputRows };
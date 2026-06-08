import { createInputRow } from "../Create/CreateInputRow/createInputRow.js";
import { startFunc as createHandleOnChange } from "./CreateHandleOnChange/start.js";

const appendInputRows = ({
    inFieldset,
    inVisibleColumnsConfig,
    inDefaultRow,
    inInputs,
    inUiClasses,
    inGetDataLists,
    hookOnChangeFunc = false,
    inServices,
    inConfig,
    inSearchableColumnsConfig,
    inShowButton,
    inDataStore
}) => {
    // debugger
    let localHandleOnChange;

    if (hookOnChangeFunc) {
        localHandleOnChange = createHandleOnChange({
            inGetDataLists,
            inColumnsConfig: inSearchableColumnsConfig
        });
    };

    // debugger;
    inSearchableColumnsConfig.forEach(localColumn => {
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
            inDataListSource: localColumn.dataListSource,
            inVisibleColumnsConfig,
            inServices,
            inConfig,
            inShowButton,
            inDataStore,
            inUiClassesForEachColumn: localColumn.uiClasses
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
    inDataListSource,
    inVisibleColumnsConfig,
    inServices,
    inConfig,
    inShowButton,
    inDataStore,
    inUiClassesForEachColumn
}) => {
    const localRow = createInputRow({
        inCol: inColumn,
        inDefaultRow,
        inInputs,
        inInputClass: inUiClassesForEachColumn?.form?.inputClass,
        inRowClass: inUiClassesForEachColumn?.form?.rowClass,
        inLabelClass: inUiClassesForEachColumn?.form?.labelClass,
        isDate,
        defaultToday,
        isReadonly,
        autoFocus,
        isSearch,
        onChangeFunc,
        inDataListSource,
        inVisibleColumnsConfig,
        inServices,
        inConfig,
        inShowButton,
        inDataStore
    });

    inFieldset.appendChild(localRow);
};

export { appendInputRows };
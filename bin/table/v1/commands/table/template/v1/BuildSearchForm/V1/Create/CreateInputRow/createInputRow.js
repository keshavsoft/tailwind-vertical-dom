// 📁 createInputRow.js

import { createLabel } from "./createLabel.js";
import { createInput } from "./createInput.js";
import { resolveValue } from "./resolveValue.js";
import { createRowContainer } from "./createRowContainer.js";
import { attachToInputs } from "./attachToInputs.js";
import { assembleRow } from "./assembleRow.js";
import createButton from "./createButton.js";

const createInputRow1 = ({
    inCol,
    inDefaultRow,
    inInputs,
    inInputClass,
    inRowClass,
    inLabelClass,
    isDate,
    defaultToday,
    isReadonly,
    autoFocus,
    isSearch,
    onChangeFunc,
    inDataListSource,
    inVisibleColumnsConfig,
    inServices,
    inConfig
}) => {
    const col = inCol.columnName;

    const row = createRowContainer({ rowClass: inRowClass });

    const value = resolveValue({ col, defaultRow: inDefaultRow });

    const label = createLabel({ col, labelClass: inLabelClass });

    const input = createInput({
        col,
        inputClass: inInputClass,
        value,
        inShowDataList: inCol.tableFooterDataListShow || inCol.isSearchable,
        isDate,
        defaultToday,
        isReadonly,
        autoFocus,
        isSearch,
        onChangeFunc,
        inDataListSource
    });

    const button = createButton({
        inColumnName: col,
        inVisibleColumnsConfig,
        inServices,
        inConfig
    });

    attachToInputs({ inputs: inInputs, col, input });

    return assembleRow({ row, label, input, button });
};

const createInputRow = ({
    inCol,
    inDefaultRow,
    inInputs,
    inInputClass,
    inRowClass,
    inLabelClass,
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
    inShowButton = true
}) => {
    const col = inCol.columnName;

    const row = createRowContainer({ rowClass: inRowClass });

    const value = resolveValue({ col, defaultRow: inDefaultRow });

    const label = createLabel({ col, labelClass: inLabelClass });

    const input = createInput({
        col,
        inputClass: inInputClass,
        value,
        inShowDataList: inCol.tableFooterDataListShow || inCol.isSearchable,
        isDate,
        defaultToday,
        isReadonly,
        autoFocus,
        isSearch,
        onChangeFunc,
        inDataListSource
    });

    const button = inShowButton
        ? createButton({
            inColumnName: col,
            inVisibleColumnsConfig,
            inServices,
            inConfig
        })
        : null;

    attachToInputs({ inputs: inInputs, col, input });

    return assembleRow({ row, label, input, button });
};

export { createInputRow };
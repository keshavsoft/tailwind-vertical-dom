// 📁 createInputRow.js

import { createLabel } from "./createLabel.js";
import { createInput } from "./createInput.js";
import { resolveValue } from "./resolveValue.js";
import { createRowContainer } from "./createRowContainer.js";
import { attachToInputs } from "./attachToInputs.js";
import { assembleRow } from "./assembleRow.js";

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
    onChangeFunc
}) => {
    const col = inCol.columnName;

    const row = createRowContainer({ rowClass: inRowClass });

    const value = resolveValue({ col, defaultRow: inDefaultRow });

    const label = createLabel({ col, labelClass: inLabelClass });

    const input = createInput({
        col,
        inputClass: inInputClass,
        value,
        inShowDataList: inCol.tableFooterDataListShow,
        isDate,
        defaultToday,
        isReadonly,
        autoFocus,
        isSearch,
        onChangeFunc
    });

    attachToInputs({ inputs: inInputs, col, input });

    return assembleRow({ row, label, input });
};

export { createInputRow };
import { createRow } from "./createRow.js";
import { createIndexCell } from "./createIndexCell.js";
import { createDataCell } from "./createDataCell.js";
import { createOptionsCell } from "./createOptionsCell.js";

const buildRow = ({ item, index, inVisibleColumns, options, searchValue }) => {
    const tr = createRow({
        inClassName: "border-t hover:bg-blue-100 odd:bg-gray-100",
        inPk: item?.pk
    });

    appendSerialCell(tr, options?.showSerial, index);

    appendDataCells({ tr, item, columns: inVisibleColumns, searchValue });
    appendActionCell({ tr, item, index, options, searchValue });

    return tr;
};

const appendSerialCell = (tr, showSerial, index) => {
    if (showSerial) {
        tr.appendChild(createIndexCell(index));
    };
};

const appendDataCells = ({ tr, item, columns, searchValue }) => {
    columns.forEach((key) => {
        tr.appendChild(createDataCell({
            value: item[key],
            searchValue
        }));
    });
};

const appendActionCell = ({ tr, item, index, options, searchValue }) => {
    if (options?.showActions) {
        tr.appendChild(
            createOptionsCell({
                item,
                index,
                onEdit: options.onEdit,
                onDelete: options.onDelete
            })
        );
    };
};

export { buildRow };

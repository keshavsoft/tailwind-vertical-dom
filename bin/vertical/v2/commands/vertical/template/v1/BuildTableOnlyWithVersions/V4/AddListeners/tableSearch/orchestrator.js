import { createRow } from "./createRow.js";

const buildRows = ({ data, columns, searchValue }) => {
    return data.map((item, index) => {
        return createRow({
            item,
            columns,
            index,
            searchValue
        });
    });
};

export { buildRows };
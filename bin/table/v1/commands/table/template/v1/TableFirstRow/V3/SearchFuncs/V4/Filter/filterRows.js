// /TableSearch/Filter/filterRows.js

import filterRow from "./filterRow.js";

const filterRows = ({
    rows,
    searchValue
}) => {

    rows.forEach((row) => {

        filterRow({
            row,
            searchValue
        });

    });

};

export default filterRows;
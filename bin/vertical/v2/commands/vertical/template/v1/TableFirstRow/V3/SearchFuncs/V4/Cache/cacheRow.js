// /TableSearch/Cache/cacheRow.js

import cacheCell from "./cacheCell.js";

const cacheRow = (row) => {

    row.dataset.searchText =
        row.textContent.toLowerCase();

    row._cells =
        [...row.children];

    row._cells.forEach(cacheCell);

};

export default cacheRow;
// /TableSearch/Cache/cacheRows.js

import cacheRow from "./cacheRow.js";

const cacheRows = ({ rows }) => {

    rows.forEach(cacheRow);

};

export default cacheRows;
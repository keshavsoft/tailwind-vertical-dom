// /TableSearch/Highlight/clearHighlights.js

import resetCellHighlight from "./resetCellHighlight.js";

const clearHighlights = ({ rows }) => {

    rows.forEach((row) => {

        row._cells.forEach(resetCellHighlight);

    });

};

export default clearHighlights;
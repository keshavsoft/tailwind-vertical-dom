// /TableSearch/Highlight/highlightRows.js

import highlightRow from "./highlightRow.js";

const highlightRows = ({
    rows,
    regex
}) => {

    rows.forEach((row) => {

        highlightRow({
            row,
            regex
        });

    });

};

export default highlightRows;
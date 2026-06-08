// /TableSearch/Highlight/highlightRow.js

import highlightCell from "./highlightCell.js";

const highlightRow = ({
    row,
    regex
}) => {

    if (row.style.display === "none") {
        return;
    };

    row._cells.forEach((cell) => {

        highlightCell({
            cell,
            regex
        });

    });

};

export default highlightRow;
// /TableSearch/Highlight/resetCellHighlight.js

const resetCellHighlight = (cell) => {

    cell.innerHTML =
        cell.dataset.originalHtml;

};

export default resetCellHighlight;
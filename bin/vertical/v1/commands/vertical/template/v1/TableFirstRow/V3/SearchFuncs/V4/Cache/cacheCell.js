// /TableSearch/Cache/cacheCell.js

const cacheCell = (cell) => {

    cell.dataset.originalHtml =
        cell.innerHTML;

};

export default cacheCell;
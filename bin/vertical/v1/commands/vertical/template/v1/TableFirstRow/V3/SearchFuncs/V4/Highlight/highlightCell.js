// /TableSearch/Highlight/highlightCell.js

const highlightCell = ({
    cell,
    regex
}) => {

    cell.innerHTML =
        cell.dataset.originalHtml.replace(
            regex,
            `<mark>$1</mark>`
        );

};

export default highlightCell;
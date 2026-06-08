import { renderTableHeading } from "../BuildFirstColumn/TableHeading/start.js";

const renderSearchRow = ({
    inOptions,
    inContainerEl,
    inDataStore,
    inDom
}) => {
    if (inOptions.firstRow.showSearch) {
        renderTableHeading({
            inContainerEl,
            inDataStore,
            inDom
        });
    } else {
        const firstRow = inDom.getFirstRowClass(inContainerEl);

        firstRow.style.display = "none";
    };
};

export { renderSearchRow };

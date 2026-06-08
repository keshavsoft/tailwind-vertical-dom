import { renderTableHeading } from "./BuildFirstColumn/TableHeading/start.js";
import { initTable } from "./BuildTable/init.js";
import { refreshTable } from "./BuildTable/refresh.js";
import { buildForm } from "./BuildForm/start.js";
import { buildDataLists } from "./BuildDataLists/addToDom.js";

const render1 = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints }) => {
    buildDataLists({
        inContainerEl,
        inDataStore,
        inDom
    });

    if (inOptions.vertical.showVertical) {
        buildForm({
            inContainerEl,
            inDataStore,
            inDom
        });
    };

    renderTableHeading({
        inContainerEl,
        inDataStore,
        inDom
    });

    buildTable({
        inContainerEl,
        inDataStore,
        inDom,
        inServices,
        inOptions,
        inEndPoints
    });
};

const refresh = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints }) => {
    buildDataLists({
        inContainerEl,
        inDataStore,
        inDom
    });

    refreshTable({
        inContainerEl,
        inDataStore,
        inDom,
        inServices,
        inOptions,
        inEndPoints
    });
};

const initRender = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints }) => {
    if (inOptions.vertical.showVertical) {
        buildForm({
            inContainerEl,
            inDataStore,
            inDom
        });
    };

    renderTableHeading({
        inContainerEl,
        inDataStore,
        inDom
    });

    initTable({
        inContainerEl,
        inDataStore,
        inDom,
        inServices,
        inOptions,
        inEndPoints
    });
};

export { initRender, refresh };

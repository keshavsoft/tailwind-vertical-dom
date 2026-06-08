import { buildHeader } from "./BuildHeader/start.js";
import { buildBody } from "./BuildBody/buildBody.js";
import { buildFooter } from "./BuildFooter/start.js";

import { hookAllListeners } from "./AddListeners/start.js";

const buildTable = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints }) => {
    buildHeader({
        inContainerEl,
        inDataStore,
        inDom
    });

    buildBody({
        inContainerEl,
        inDataStore,
        inDom,
        options: {
            showActions: true,
            onEdit: ({ item }) => console.log("edit", item),
            onDelete: ({ index }) => console.log("delete", index)
        }
    });

    buildFooter({
        inContainerEl,
        inDataStore,
        inDom,
        inServices,
        inOptions,
        inEndPoints
    });

    hookAllListeners({ inContainerEl, inDataStore, inDom });
};

export { buildTable };

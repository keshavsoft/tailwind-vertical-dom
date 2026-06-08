import { hookAllListeners } from "../AddListeners/start.js";

const hookDomListeners = ({
    inContainerEl,
    inDataStore,
    inDom,
    inOptions
}) => {
    hookAllListeners({
        inContainerEl,
        inDataStore,
        inDom,
        inOptions
    });
};

export { hookDomListeners };

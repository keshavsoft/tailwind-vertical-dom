const lockTable = ({ inContainerEl, inIsDisabled }) => {
    const container = inContainerEl;

    const table = container.querySelector("table");
    if (!table) return;

    const parent = table.closest(".tableParent");
    if (!parent) return;

    if (inIsDisabled) {
        parent.setAttribute("inert", "");
    } else {
        parent.removeAttribute("inert");
    }
};

export { lockTable };
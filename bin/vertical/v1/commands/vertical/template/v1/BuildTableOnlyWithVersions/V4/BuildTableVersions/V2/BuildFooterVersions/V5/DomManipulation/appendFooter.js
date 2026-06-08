const appendFooter = ({ inDom, inContainerEl, inTr }) => {
    const localTableFooter =
        inDom.getTableFooter(inContainerEl);

    localTableFooter.appendChild(inTr);
};

export { appendFooter };
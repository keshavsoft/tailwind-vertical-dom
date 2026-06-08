const createRow = ({ inPk, inClassName }) => {
    const tr = document.createElement("tr");
    tr.className = inClassName;
    tr.dataset.pk = inPk;

    return tr;
};

export { createRow };
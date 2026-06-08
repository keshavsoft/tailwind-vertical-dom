const createRowContainer = ({ rowClass }) => {
    const row = document.createElement('div');
    row.className = rowClass;
    return row;
};

export { createRowContainer };
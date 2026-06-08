const createRowContainer = ({ rowClass = 'flex items-center space-x-4' }) => {
    const row = document.createElement('div');
    row.className = rowClass;
    return row;
};

export { createRowContainer };

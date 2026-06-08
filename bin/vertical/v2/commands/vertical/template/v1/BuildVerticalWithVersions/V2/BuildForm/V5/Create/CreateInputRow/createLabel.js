const createLabel = ({ col, labelClass }) => {
    const label = document.createElement('label');
    label.textContent = col;
    label.className = labelClass;
    return label;
};

export { createLabel };
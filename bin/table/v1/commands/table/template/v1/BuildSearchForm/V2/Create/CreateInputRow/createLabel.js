const createLabel = ({ col, labelClass ='w-24 text-sm font-medium'}) => {
    const label = document.createElement('label');
    label.textContent = col;
    label.className = labelClass;
    return label;
};

export { createLabel };
const assembleRow = ({ row, label, input, button }) => {
    row.appendChild(label);
    row.appendChild(input);

    if (button) {
        row.appendChild(button);
    };

    return row;
};

export { assembleRow };
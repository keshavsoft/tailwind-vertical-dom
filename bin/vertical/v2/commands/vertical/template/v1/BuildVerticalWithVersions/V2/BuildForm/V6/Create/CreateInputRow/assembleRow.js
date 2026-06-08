const assembleRow = ({ row, label, input }) => {
    row.appendChild(label);
    row.appendChild(input);
    return row;
};

export { assembleRow };
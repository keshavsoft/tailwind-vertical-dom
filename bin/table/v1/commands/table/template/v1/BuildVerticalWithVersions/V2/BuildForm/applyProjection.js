const applyProjection = ({ row, projection }) => {
    if (!row || !projection) return row;

    const updatedRow = { ...row };

    Object.keys(projection).forEach((key) => {
        if (key in updatedRow) {
            updatedRow[key] = projection[key];
        }
    });

    return updatedRow;
};

export { applyProjection };
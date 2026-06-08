// Utils/validateRow.js

const validateRow = ({ payload, inColumnsConfig }) => {
    return inColumnsConfig
        .filter(col => col.isRequired) // ✅ dynamic
        .filter(col => !payload[col.columnName] || String(payload[col.columnName]).trim() === "")
        .map(col => ({
            field: col.columnName,
            message: `${col.columnName} is required`
        }));
};

export { validateRow };
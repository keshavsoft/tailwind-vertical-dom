// Utils/validateRow.js

const validateRow = (payload) => {
    const errors = [];

    Object.entries(payload).forEach(([key, value]) => {
        if (value === null || value === undefined || String(value).trim() === "") {
            errors.push({
                field: key,
                message: `${key} is required`
            });
        }
    });

    return errors;
};

export { validateRow };
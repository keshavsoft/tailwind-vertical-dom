// applyInputValue.js

const applyInputValue = ({ input, value }) => {
    if (value !== undefined) {
        input.dataset.defaultValue = value ?? "";
    }

    input.value = value ?? "";
};

export { applyInputValue };
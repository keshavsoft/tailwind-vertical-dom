const focusFirstInput = ({ inInputs }) => {
    const inputs = inInputs;
    const firstKey = Object.keys(inputs)[0];

    if (firstKey) {
        inputs[firstKey].focus();
    }
};

export { focusFirstInput };
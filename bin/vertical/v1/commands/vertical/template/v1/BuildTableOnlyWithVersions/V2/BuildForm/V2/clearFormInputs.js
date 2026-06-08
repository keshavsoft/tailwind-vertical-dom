const clearFormInputs = ({ inInputs }) => {
    const inputs = inInputs;

    Object.values(inputs).forEach(input => {
        input.value = "";
    });
};

export { clearFormInputs };
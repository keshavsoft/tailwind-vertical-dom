const fillInputsFromObject = ({
    container,
    sourceObject,
    skipInput
}) => {
    // console.log("sourceObject : ", sourceObject);

    Object.entries(sourceObject).forEach(([key, value]) => {
        // const selector = `[name="${CSS.escape(key)}"]`;
        const selector = `[data-data-list-fill-name="${CSS.escape(key)}"]`;

        const input = container.querySelector(selector);

        if (!input || input === skipInput) return;

        input.value = value ?? "";
        input.dispatchEvent(new Event("change", { bubbles: true }));
    });
};

export { fillInputsFromObject };
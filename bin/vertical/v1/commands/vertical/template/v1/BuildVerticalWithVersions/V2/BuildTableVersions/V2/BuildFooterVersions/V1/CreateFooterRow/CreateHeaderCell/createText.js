const createText = (key) => {
    const span = document.createElement("span");
    span.textContent = key;
    return span;
};

export { createText };
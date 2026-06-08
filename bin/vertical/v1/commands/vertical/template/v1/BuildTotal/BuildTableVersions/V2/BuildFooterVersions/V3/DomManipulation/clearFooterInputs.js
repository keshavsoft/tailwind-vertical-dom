const resetSelect = (el) => {
    el.selectedIndex = 0;
};

const resetWithDefault = (el) => {
    el.value = el.dataset.defaultValue;
};

const resetEmpty = (el) => {
    el.value = "";
};

const handleElement = (el) => {
    if (el.tagName === "SELECT") return resetSelect(el);
    if ("defaultValue" in el.dataset) return resetWithDefault(el);
    return resetEmpty(el);
};

const clearFooterInputs = (tr) => {
    const elements = tr.querySelectorAll("input, select, textarea");
    elements.forEach(handleElement);
};

export { clearFooterInputs };
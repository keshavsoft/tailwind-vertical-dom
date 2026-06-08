const clearFooterInputs = (tr) => {
    tr.querySelectorAll("input, select, textarea").forEach(el => {
        if (el.tagName === "SELECT") {
            el.selectedIndex = 0;
        } else {
            el.value = "";
        }
    });
};

export { clearFooterInputs };
const clearFooterInputs1 = (tr) => {
    tr.querySelectorAll("input, select, textarea").forEach(el => {
        if (el.tagName === "SELECT") {
            el.selectedIndex = 0;
        } else {
            if ("defaultValue" in el.dataset) {
                el.value = el.dataset.defaultValue;
            } else {
                el.value = "";
            };
        };
    });
};

const clearFooterInputs = (tr) => {
    tr.querySelectorAll("input, select, textarea").forEach((el) => {
        if (el.tagName === "SELECT") {
            el.selectedIndex = 0;
            return;
        };

        el.value = ("defaultValue" in el.dataset)
            ? el.dataset.defaultValue
            : "";
    });
};

export { clearFooterInputs };
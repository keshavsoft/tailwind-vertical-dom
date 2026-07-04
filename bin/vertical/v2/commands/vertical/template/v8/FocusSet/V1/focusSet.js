const focusToEl = ({ inContainerEl }) => {

    // 1. try footer inputs
    let el = inContainerEl.querySelector(
        "tfoot input, tfoot select, tfoot textarea"
    );

    if (el) {
        el.focus();
        return;
    }

    // 2. fallback → search input (header/global)
    el = document.querySelector("input[type='search'], input[placeholder*='search']");

    if (el && el.offsetParent !== null) { // visible check
        el.focus();
    }
};

export { focusToEl };
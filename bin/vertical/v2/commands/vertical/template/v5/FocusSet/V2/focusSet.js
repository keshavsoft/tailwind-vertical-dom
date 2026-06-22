const focusToEl = ({ inContainerEl, inPriority }) => {

    const containerEl = inContainerEl;
    const priority = inPriority;

    let el = null;

    for (let i = 0; i < priority.length; i++) {

        const type = priority[i];

        // 🔹 vertical
        if (type === "vertical") {
            const findVertical = "verticalForm";

            el = containerEl.querySelector(
                `.${findVertical} input, .${findVertical} select, .${findVertical} textarea`
            );
        }

        // 🔹 footer
        else if (type === "footer") {
            el = containerEl.querySelector(
                "tfoot input, tfoot select, tfoot textarea"
            );
        }

        // 🔹 search
        else if (type === "search") {
            el = document.querySelector(
                "input[type='search'], input[placeholder*='search']"
            );
        }

        // ✅ if found → focus and stop
        if (el && el.offsetParent !== null) {
            el.focus();
            return;
        }
    }

};

export { focusToEl };
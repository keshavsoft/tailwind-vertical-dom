const startFunc = ({ inContainerEl }) => {
    const firstControl = inContainerEl.querySelector(
        ".verticalForm [tabindex], .verticalForm input, .verticalForm select, .verticalForm textarea, .verticalForm button"
    );

    firstControl?.focus();
};

export default startFunc;
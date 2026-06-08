const startFunc = ({ inContainerEl }) => {
    if (!focusToFooter({ inContainerEl })) {
        focusToSearch({ inContainerEl });
    };

    // focusToFooter({ inContainerEl });
};

const focusToFooter = ({ inContainerEl }) => {
    const firstControl = inContainerEl.querySelector(
        "tfoot input, tfoot select, tfoot textarea"
    );

    if (!firstControl) return false;

    firstControl?.focus();

    return true;
};

const focusToSearch = ({ inContainerEl }) => {
    const focusControl = inContainerEl.querySelector(".tableSearchClass");

    focusControl?.focus();
};

export default startFunc;
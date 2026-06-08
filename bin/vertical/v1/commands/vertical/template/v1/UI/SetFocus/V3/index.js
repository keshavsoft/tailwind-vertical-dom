const startFunc = ({ inContainerEl }) => {
    // debugger;
    focusToFooter({ inContainerEl });
};

const focusToFooter = ({ inContainerEl }) => {
    const firstControl = inContainerEl.querySelector(
        "tfoot input, tfoot select, tfoot textarea"
    );

    firstControl?.focus();
};

const focusToSearch = ({ inContainerEl }) => {
    const focusControl = inContainerEl.querySelector(".tableSearchClass");

    focusControl?.focus();
};

export default startFunc;
// applyInputFlags.js

const applyInputFlags = ({
    input,
    isReadonly,
    autoFocus
}) => {
    if (isReadonly) {
        input.readOnly = true;
    }

    if (autoFocus) {
        input.autofocus = true;
    }
};

export { applyInputFlags };
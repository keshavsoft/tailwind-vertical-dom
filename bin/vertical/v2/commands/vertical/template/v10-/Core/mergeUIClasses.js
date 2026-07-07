export const mergeUIClasses = (defaults, incoming = {}) => ({
    ...defaults,
    ...incoming,
    form: {
        ...defaults.form,
        ...incoming.form
    }
});

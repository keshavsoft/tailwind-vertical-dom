// createForm.js

const createForm = (options) => {
    const form = document.createElement("ks-html-form");
    form.init(options);
    return form;
};

export default createForm;
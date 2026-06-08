const clearErrors = (tr) => {
    tr.querySelectorAll(".ks-error").forEach(el => el.remove());
    tr.querySelectorAll(".border-red-500")
        .forEach(el => el.classList.remove("border-red-500"));
};

export { clearErrors };
const formSearchParamsFunc = ({ inKeyName }) => {
    const params = new URLSearchParams(window.location.search);
    const pk = params.get(inKeyName);

    return pk;
};

export { formSearchParamsFunc };
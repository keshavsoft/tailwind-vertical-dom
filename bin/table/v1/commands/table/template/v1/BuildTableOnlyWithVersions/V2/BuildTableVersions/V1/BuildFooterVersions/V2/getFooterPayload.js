const getFooterPayload = ({ tr, inDataStore, inDom }) => {
    const keys = inDataStore.getColumns();
    const payload = {};

    keys.forEach((key) => {
        payload[key] = inDom.getInputValueFromRow(tr, key);
    });

    return payload;
};

export { getFooterPayload };
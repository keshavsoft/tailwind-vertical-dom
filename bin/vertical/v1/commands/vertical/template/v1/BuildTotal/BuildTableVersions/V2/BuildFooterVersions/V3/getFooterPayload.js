const getFooterPayload = ({ tr, inDom, inVisibleColumns, inDefaultObject }) => {
    const keys = inVisibleColumns;
    const payload = {
        ...inDefaultObject
    };

    keys.forEach((key) => {
        payload[key] = inDom.getInputValueFromRow(tr, key);
    });

    return payload;
};

export { getFooterPayload };
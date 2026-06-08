const getFooterPayload = ({ tr, inDom, inVisibleColumns, inToSaveRow }) => {
    const keys = inVisibleColumns;
    const payload = {
        ...inToSaveRow
    };

    keys.forEach((key) => {
        payload[key] = inDom.getInputValueFromRow(tr, key);
    });

    return payload;
};

export { getFooterPayload };
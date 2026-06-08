const createItem = async ({ inEndPoint, payload }) => {
    const res = await fetch(inEndPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    return await res;
};

export default createItem;
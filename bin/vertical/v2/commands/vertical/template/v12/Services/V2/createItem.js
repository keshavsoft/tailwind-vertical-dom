const createItem = async ({ inEndPoint, payload }) => {
    const res = await fetch(inEndPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error("Create failed");

    return await res.json();
};

export { createItem };
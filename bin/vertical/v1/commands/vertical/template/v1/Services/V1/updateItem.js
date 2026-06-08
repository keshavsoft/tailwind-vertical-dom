const updateItem = async ({ tableName, payload }) => {
    const res = await fetch(`/api/${tableName}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error("Create failed");

    return await res.json();
};

export { updateItem };
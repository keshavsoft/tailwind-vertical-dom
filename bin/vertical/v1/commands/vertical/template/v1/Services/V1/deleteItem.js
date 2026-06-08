const deleteItem = async ({ inEndPoint, id }) => {
    const res = await fetch(`${inEndPoint}/${id}`, {
        method: "DELETE"
    });

    if (!res.ok) throw new Error("Create failed");

    return await res.text();
};

export { deleteItem };
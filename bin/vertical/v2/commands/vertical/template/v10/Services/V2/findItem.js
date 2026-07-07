const findItem = async ({ inEndPoint, id }) => {
    const res = await fetch(`${inEndPoint}/${id}`, {
        method: "GET"
    });

    if (!res.ok) throw new Error("Create failed");

    return await res.json();
};

export { findItem };
const findFromParams = async ({ inEndPoint }) => {
    const res = await fetch(inEndPoint, {
        method: "GET"
    });

    if (!res.ok) throw new Error("find failed");

    return await res.json();
};

export default findFromParams;
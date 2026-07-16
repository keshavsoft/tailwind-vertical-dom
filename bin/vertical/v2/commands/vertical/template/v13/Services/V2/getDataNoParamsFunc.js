const getDataNoParamsFunc = async ({ inEndPoint }) => {
    const res = await fetch(inEndPoint);

    if (!res.ok) throw new Error("Fetch failed");

    return await res.json();
};

export default getDataNoParamsFunc;
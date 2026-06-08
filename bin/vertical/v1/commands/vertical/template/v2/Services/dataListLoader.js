const loadDataLists = async ({ inEndpoints, inServices, inDataStore }) => {
    const localEndpoints = Object.entries(inEndpoints?.dataListEndpoints || {});

    if (localEndpoints.length === 0) return;

    const results = await Promise.all(
        localEndpoints.map(([key, ep]) =>
            inServices.actions.getData({ inEndPoint: ep }).then(data => [key, data])
        )
    );
    // debugger;
    results.forEach(([key, data]) => {
        // localStorage.setItem(key, JSON.stringify(data));
        inDataStore.setDataList(key, data);
    });
};

export { loadDataLists };
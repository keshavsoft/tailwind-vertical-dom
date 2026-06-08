const startFunc = (key, dataRef, sortState) => {
    const asc = sortState[key] = !sortState[key];

    dataRef.sort((a, b) => {
        const valA = (a[key] ?? '').toString().toLowerCase();
        const valB = (b[key] ?? '').toString().toLowerCase();

        return asc
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
    });

    return asc;
};

export { startFunc };
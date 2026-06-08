const runDeleteCallback = async ({ presentPk, inOnDelete }) => {
    if (inOnDelete) {
        return await inOnDelete({
            toDeletePk: presentPk
        });
    };

    return { ok: true };
};

export { runDeleteCallback };

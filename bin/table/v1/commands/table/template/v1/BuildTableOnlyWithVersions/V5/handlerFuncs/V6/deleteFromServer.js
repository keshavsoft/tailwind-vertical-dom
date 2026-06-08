const deleteFromServer = async ({ presentPk, inServices, inEndPoints }) => {
    return await inServices.actions.table.delete({
        inEndPoint: inEndPoints.delete,
        id: presentPk
    });
};

export { deleteFromServer };

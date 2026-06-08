export const createState = () => {
    let tableContainerId = "kSTableContainer";
    const tableNameClass = "tableNameClass";

    return {
        setTableContainerId(val) {
            tableContainerId = val;
        },
        getTableContainerId() {
            return tableContainerId;
        },
        getTableNameClass() {
            return tableNameClass;
        }
    };
};
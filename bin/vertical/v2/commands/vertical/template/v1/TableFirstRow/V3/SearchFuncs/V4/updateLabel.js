// /SearchFuncs/V4/updateLabel.js

const startFunc = ({
    inContainerEl,
    visibleRowsCount,
    totalRowsCount
}) => {

    const tableNameClass =
        inContainerEl.querySelector(".tableNameClass");

    const tableName =
        tableNameClass.dataset.tableName;

    tableNameClass.innerHTML =
        `${tableName} ${visibleRowsCount}/${totalRowsCount}`;

};

export default startFunc;
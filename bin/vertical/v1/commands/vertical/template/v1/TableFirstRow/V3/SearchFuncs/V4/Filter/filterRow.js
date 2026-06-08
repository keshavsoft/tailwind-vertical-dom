// /TableSearch/Filter/filterRow.js

const filterRow = ({
    row,
    searchValue
}) => {

    const matched =
        row.dataset.searchText.includes(searchValue);

    row.style.display =
        matched
            ? ""
            : "none";

};

export default filterRow;
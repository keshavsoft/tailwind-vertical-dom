const cacheCell = (cell) => {

    cell.dataset.originalHtml =
        cell.innerHTML;

};

const cacheRow = (row) => {

    row.dataset.searchText =
        row.textContent.toLowerCase();

    row._cells =
        [...row.children];

    row._cells.forEach(cacheCell);

};

const cacheRows = ({ rows }) => {

    rows.forEach(cacheRow);

};

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

const filterRows = ({
    rows,
    searchValue
}) => {

    rows.forEach((row) => {

        filterRow({
            row,
            searchValue
        });

    });

};

const resetCellHighlight = (cell) => {

    cell.innerHTML =
        cell.dataset.originalHtml;

};

const clearHighlights = ({ rows }) => {

    rows.forEach((row) => {

        row._cells.forEach(resetCellHighlight);

    });

};

const highlightCell = ({
    cell,
    regex
}) => {

    cell.innerHTML =
        cell.innerHTML.replace(
            regex,
            `<mark>$1</mark>`
        );

};

const highlightRow = ({
    row,
    regex
}) => {

    if (row.style.display === "none") {
        return;
    };

    row._cells.forEach((cell) => {

        highlightCell({
            cell,
            regex
        });

    });

};

const highlightRows = ({
    rows,
    regex
}) => {

    rows.forEach((row) => {

        highlightRow({
            row,
            regex
        });

    });

};

const updateFooter = ({
    inUpdateFooter,
    inContainerEl
}) => {

    if (inUpdateFooter) {

        inUpdateFooter({
            inContainerEl
        });

    };

};

const getRegex = ({ searchValue }) => {

    const escapedSearchValue =
        searchValue.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

    return new RegExp(
        `(${escapedSearchValue})`,
        "ig"
    );

};

const startFunc = ({
    inContainerEl,
    inUpdateFooter
}) => {

    const searchInput =
        inContainerEl.querySelector(".tableSearchClass");

    const rows =
        [...inContainerEl.querySelectorAll("tbody tr")];

    cacheRows({ rows });

    let timeout;

    searchInput.addEventListener("keyup", (event) => {

        clearTimeout(timeout);

        const searchValue =
            event.target.value.toLowerCase();

        filterRows({
            rows,
            searchValue
        });

        timeout = setTimeout(() => {

            clearHighlights({ rows });

            if (!searchValue) {

                updateFooter({
                    inUpdateFooter,
                    inContainerEl
                });

                return;

            };

            const regex =
                getRegex({
                    searchValue
                });

            highlightRows({
                rows,
                regex
            });

            updateFooter({
                inUpdateFooter,
                inContainerEl
            });

        }, 400);

    });

};

export default startFunc;
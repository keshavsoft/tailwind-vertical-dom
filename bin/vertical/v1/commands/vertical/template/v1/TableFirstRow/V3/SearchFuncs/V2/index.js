const startFunc = ({
    inContainerEl,
    inUpdateFooter
}) => {

    const searchInput =
        inContainerEl.querySelector(".tableSearchClass");

    const rows =
        inContainerEl.querySelectorAll("tbody tr");

    // cache once
    rows.forEach((row) => {

        row.dataset.searchText =
            row.innerText.toLowerCase();

        row._cells =
            row.querySelectorAll("td");

    });

    let timeout;

    searchInput.addEventListener("keyup", (event) => {

        clearTimeout(timeout);

        const searchValue =
            event.target.value.toLowerCase();

        // fast filter
        rows.forEach((row) => {

            const matched =
                row.dataset.searchText.includes(searchValue);

            row.style.display =
                matched
                    ? ""
                    : "none";

        });

        // delayed highlight
        timeout = setTimeout(() => {

            // clear old highlights
            rows.forEach((row) => {

                row.querySelectorAll("mark").forEach((mark) => {

                    mark.replaceWith(mark.innerText);

                });

            });

            if (!searchValue) {
                return;
            };

            const escapedSearchValue =
                searchValue.replace(
                    /[.*+?^${}()|[\]\\]/g,
                    "\\$&"
                );

            const regex =
                new RegExp(
                    `(${escapedSearchValue})`,
                    "ig"
                );

            // highlight only visible rows
            rows.forEach((row) => {

                if (row.style.display === "none") {
                    return;
                };

                row._cells.forEach((cell) => {

                    cell.innerHTML =
                        cell.textContent.replace(
                            regex,
                            `<mark>$1</mark>`
                        );

                });

            });

            // optional footer update
            if (inUpdateFooter) {

                inUpdateFooter({
                    inContainerEl
                });

            };

        }, 400);

    });

};

export default startFunc;
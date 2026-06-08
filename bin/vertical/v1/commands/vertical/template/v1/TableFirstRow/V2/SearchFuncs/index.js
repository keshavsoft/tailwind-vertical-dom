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

    });

    let timeout;

    searchInput.addEventListener("keyup", (event) => {

        clearTimeout(timeout);

        const searchValue =
            event.target.value.toLowerCase();

        // fast filtering
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

            rows.forEach((row) => {

                row.querySelectorAll("mark").forEach((mark) => {
                    mark.replaceWith(mark.innerText);
                });

                if (
                    row.style.display === "none"
                    || !searchValue
                ) {
                    return;
                };

                row.querySelectorAll("td").forEach((cell) => {

                    const escapedSearchValue =
                        searchValue.replace(
                            /[.*+?^${}()|[\]\\]/g,
                            "\\$&"
                        );

                    const regex =
                        new RegExp(`(${escapedSearchValue})`, "ig");

                    cell.innerHTML =
                        cell.textContent.replace(
                            regex,
                            `<mark>$1</mark>`
                        );

                });

            });

        }, 400);

    });

};

export default startFunc;
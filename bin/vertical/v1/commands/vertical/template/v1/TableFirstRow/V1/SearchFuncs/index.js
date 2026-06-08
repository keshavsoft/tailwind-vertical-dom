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

    searchInput.addEventListener("keyup", (event) => {

        const searchValue =
            event.target.value.toLowerCase();

        rows.forEach((row) => {

            const rowText =
                row.dataset.searchText;

            row.style.display =
                rowText.includes(searchValue)
                    ? ""
                    : "none";

        });

        // inUpdateFooter({
        //     inKSTableContainer: kSTableContainer
        // });

    });

};

export default startFunc;
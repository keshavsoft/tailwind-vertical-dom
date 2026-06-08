export const buildHeaderRow = ({ inTitleText = "Items" } = {}) => {
    const titleText = inTitleText;

    const header = createHeaderRoot();
    const left = createLeftSection({ inTitleText: titleText });
    const right = createSearchSection();

    header.append(left, right.container);

    return { header, searchInput: right.input };
};

const createHeaderRoot = () => {
    const el = document.createElement("div");
    el.className = "firstRowClass flex items-center justify-between px-6 pt-2 pb-2";
    return el;
};
const createLeftSection = ({ inTitleText }) => {
    const titleText = inTitleText;

    const left = document.createElement("div");
    left.className = "flex items-center gap-3";

    const title = document.createElement("h5");
    title.className = "tableNameClass text-lg font-semibold text-gray-900";
    title.dataset.tableName = titleText;
    title.textContent = titleText;

    left.appendChild(title);

    return left;
};

const createSearchSection = () => {
    const container = document.createElement("div");
    container.className = "relative w-full max-w-md";

    const input = createSearchInput();
    const icon = createSearchIcon();

    container.append(input, icon);

    return { container, input, icon };
};
const createSearchInput = () => {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "search...";
    input.className =
        "tableSearchClass ks-search-allColumns w-full h-9 pl-3 pr-9 text-sm border border-gray-300 rounded-md outline-none";

    return input;
};
const createSearchIcon = () => {
    const input = document.createElement("input");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "absolute right-2 top-2 w-4 h-4 text-gray-400 cursor-pointer");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M21 21l-5.2-5.2M15 10a5 5 0 11-10 0 5 5 0 0110 0z");

    svg.appendChild(path);

    // ✅ CLICK EVENT
    svg.addEventListener("click", () => {
        input.focus();
        input.dispatchEvent(new Event("input")); // trigger search manually if needed
    });

    return svg;
};
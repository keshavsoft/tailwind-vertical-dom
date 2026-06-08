const createSortIcon = () => {
    const svgNS = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("class", "w-4 h-4 text-gray-400");
    svg.setAttribute("data-sort-icon", "true");

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute(
        "d",
        "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    );

    svg.appendChild(path);

    return svg;
};

export { createSortIcon };
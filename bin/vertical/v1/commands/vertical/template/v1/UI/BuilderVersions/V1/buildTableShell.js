const buildTableShell = ({ inTableClassName = "table bg-white table-fixed w-[1000px]" }) => {
    const wrapper = document.createElement("div");
    wrapper.className = "rounded-b-lg shadow-md overflow-x-auto tableParent";

    const table = document.createElement("table");
    table.className = inTableClassName;

    const thead = document.createElement("thead");
    thead.className = "theadClass";

    const tbody = document.createElement("tbody");
    tbody.className = "tbodyClass";

    const tfoot = document.createElement("tfoot");
    tfoot.className = "tfootClass";

    table.append(thead, tbody, tfoot);
    wrapper.append(table);

    return { wrapper };
};

export default buildTableShell;
const createIndexCell = (index) => {
    const td = document.createElement("td");
    td.className = "px-4 py-2 border text-right";
    td.textContent = index + 1;
    return td;
};

export { createIndexCell };
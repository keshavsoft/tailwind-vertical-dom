const appendFooterSaveCell = (options = {}) => {
    // debugger
    if (!options?.onSave) return;

    const td = document.createElement("td");
    td.className = "px-4 py-2 border";

    const btn = document.createElement("button");
    btn.textContent = "Save";
    btn.className = "px-3 py-1 bg-green-500 text-white rounded";

    btn.onclick = (e) => options?.onSave?.(e);

    td.appendChild(btn);
    // debugger
    return td;
};

export { appendFooterSaveCell };
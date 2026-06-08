const createOptionsCell = ({ item, index, onEdit, onDelete }) => {
    const td = document.createElement("td");
    td.className = "px-4 py-2 border flex gap-2";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "px-2 py-1 bg-yellow-400 text-white rounded";
    editBtn.onclick = () => onEdit?.({ item, index });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "px-2 py-1 bg-red-500 text-white rounded";
    deleteBtn.onclick = () => onDelete?.({ item, index, presentPk: item.pk });

    td.appendChild(editBtn);
    td.appendChild(deleteBtn);

    return td;
};

export { createOptionsCell };
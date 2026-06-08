import { createCell } from './createCell.js';

const createIndexCell = (index) => {
    const td = document.createElement('td');
    td.className = 'px-4 py-2 border text-right';
    td.textContent = index + 1;
    return td;
};

const createDataCells = ({ item, columns, searchValue }) => {
    return columns.map(k => {
        const value = (item[k] ?? '').toString();

        return createCell({
            value,
            searchValue
        });
    });
};

const createRow = ({ item, columns, index, searchValue }) => {
    const tr = document.createElement('tr');
    tr.className = 'border-t hover:bg-blue-100 odd:bg-gray-100';

    // 1. index column
    tr.appendChild(createIndexCell(index));

    // 2. data columns
    const cells = createDataCells({ item, columns, searchValue });
    cells.forEach(td => tr.appendChild(td));

    return tr;
};

export { createRow };
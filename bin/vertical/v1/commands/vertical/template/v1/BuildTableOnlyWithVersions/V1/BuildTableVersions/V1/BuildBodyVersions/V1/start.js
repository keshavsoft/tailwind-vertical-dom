const buildBody = ({ inDataStore, inContainerEl, inDom }) => {
    const containerEl = inContainerEl;

    const dataToShow = inDataStore.getData();
    const columns = inDataStore.getColumns();
    const tableBody = inDom.getTableBody(containerEl);

    tableBody.innerHTML = '';

    dataToShow.forEach((item, i) => {
        const tr = document.createElement('tr');
        tr.className = 'border-t hover:bg-blue-100 odd:bg-gray-100';

        const tdIndex = document.createElement('td');
        tdIndex.className = 'px-4 py-2 border text-right';
        tdIndex.textContent = i + 1;
        tr.appendChild(tdIndex);

        columns.forEach(k => {
            const td = document.createElement('td');
            td.className = 'px-4 py-2 border';

            const value = (item[k] ?? '').toString();

            td.textContent = value;

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });
};

export { buildBody };
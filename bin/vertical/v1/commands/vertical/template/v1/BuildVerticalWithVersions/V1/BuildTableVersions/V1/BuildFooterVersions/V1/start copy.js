import { startFunc as createFooterRow } from "./CreateFooterRow/start.js";
import { refreshTable } from "../../refresh.js";

const buildFooter = ({ inDataStore, inContainerEl, inDom, inServices, inOptions, inEndPoints }) => {
    const containerEl = inContainerEl;

    const handleSave = async (e) => {
        const tr = e.target.closest("tr");

        const payload = getFooterPayload({
            tr,
            inDataStore,
            inDom
        });

        await inServices.actions.create({
            inEndPoint: inEndPoints.create,
            payload
        });

        // ✅ ADD THIS BLOCK 👇

        const freshData = await inServices.actions.getData({
            inEndPoint: inEndPoints.read
        });
        // debugger;
        inDataStore.setData(freshData);

        refreshTable({ inContainerEl, inDataStore, inDom });
        focusFooter({ inContainerEl });
    };

    const focusFooter = ({ inContainerEl }) => {
        const el = inContainerEl.querySelector(
            "tfoot input, tfoot select, tfoot textarea"
        );

        el?.focus();
    };

    const columns = inDataStore.getColumns();

    const tr = createFooterRow(columns, {
        showActions: true,
        onSave: handleSave
    });

    const tableFooter = inDom.getTableFooter(containerEl);

    tableFooter.appendChild(tr);
};

const getFooterPayload = ({ tr, inDataStore, inDom }) => {
    const keys = inDataStore.getColumns();
    const payload = {};
    debugger;
    keys.forEach((key) => {
        payload[key] = inDom.getInputValueFromRow(tr, key);
    });

    return payload;
};

export { buildFooter };
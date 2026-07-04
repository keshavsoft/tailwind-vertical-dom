import { buildBody } from "../../../../BuildTableVersions/V4/BuildBodyVersions/V4/start.js";
import UpdateFooter from "../../../../BuildTableVersions/V4/BuildFooterVersions/ForSummary/V8/UpdateFooter/V4/start.js";

const startFunc = ({ inClassName = "px-4 py-2 bg-blue-500 text-white rounded",
    inVisibleColumnsConfig, inServices, inConfig, inColumnName
}) => {
    const button = document.createElement("button");
    button.innerHTML = "Filter";
    button.className = inClassName;
    button.dataset.columnName = inColumnName;

    button.addEventListener("click", async (event) => {
        event.preventDefault();
        const localCurrentTarget = event.currentTarget;;

        await onFilterClick({
            inCurrentTarget: localCurrentTarget,
            inServices,
            inConfig,
            inVisibleColumnsConfig
        })
    });

    return button;
};

const onFilterClick = async ({ inCurrentTarget, inVisibleColumnsConfig,
    inServices, inConfig
}) => {
    const localCurrentTarget = inCurrentTarget;

    const row = localCurrentTarget.closest("div");
    const input = row.querySelector("input");
    const table = localCurrentTarget.closest("#kSTableContainer");
    const tableFooter = table.querySelector("tfoot");

    // debugger
    const closestKSTableContainer = localCurrentTarget.closest("#kSTableContainer");
    const tableBody = closestKSTableContainer.querySelector("tbody");
    const columnName = localCurrentTarget.dataset.columnName;
    const payloadToSend = {};

    payloadToSend[columnName] = input.value;

    const filteredData = await inServices.actions.search.filter({
        inEndPoint: inConfig.endPoints.filter,
        payload: payloadToSend
    });

    buildBody({
        inDataToShow: filteredData,
        inTableBody: tableBody,
        inVisibleColumnsConfig
    });
    // debugger
    UpdateFooter({
        inTableFooter: tableFooter,
        inVisibleColumnsConfig,
        inThSerialClassName: "",
        inData: filteredData,
        inShowFooterRows: true,
        inShowBalanceForSearch: true,
        inShowTotalsForSearch: true
    });
    // console.log(input.value, closestKSTableContainer);
};

export default startFunc;
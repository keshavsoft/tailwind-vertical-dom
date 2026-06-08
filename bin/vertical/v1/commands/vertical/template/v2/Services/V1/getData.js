import { buildUrlWithParams } from "./buildUrlWithParams.js";
import { formSearchParamsFunc } from "./formSearchParamsFunc.js";

const getDataFromFetch = async ({ inEndPoint }) => {
    const ParentPk = formSearchParamsFunc({ inKeyName: "pk" });

    const finalUrl = buildUrlWithParams({
        baseUrl: inEndPoint,
        params: { ParentPk }
    });

    const res = await fetch(finalUrl);

    if (!res.ok) throw new Error("Fetch failed");

    return await res.json();
};

export { getDataFromFetch };
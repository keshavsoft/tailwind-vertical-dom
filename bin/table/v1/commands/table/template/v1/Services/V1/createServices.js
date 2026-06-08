import { createItem } from "./createItem.js";
import { getDataFromFetch } from "./getData.js";
import { deleteItem } from "./deleteItem.js";
import { findItem } from "./findItem.js";
import filterPost from "./filterPost.js";
import findFromParams from "./findFromParams.js";
import getDataNoParamsFunc from "./getDataNoParamsFunc.js";

export const createServices = ({ tableName }) => {
    return {
        actions: {
            getData: ({ inEndPoint }) => getDataFromFetch({ inEndPoint }),
            create: ({ inEndPoint, payload }) => createItem({ inEndPoint, payload }),
            update: (id, payload) => updateItem({ tableName, id, payload }),
            remove: ({ inEndPoint, id }) => deleteItem({ inEndPoint, id }),
            find: ({ inEndPoint, id }) => findItem({ inEndPoint, id }),
            findFromParams: ({ inEndPoint }) => findFromParams({ inEndPoint }),
            vertical: {
                save: async ({ inEndPoint, payload }) => {
                    const res = await fetch(inEndPoint, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    });

                    return await res;
                }
            },
            table: {
                delete: async ({ inEndPoint, id }) => {
                    const res = await fetch(`${inEndPoint}/${id}`, {
                        method: "DELETE"
                    });

                    return await res;
                }
            },
            search: {
                filter: ({ inEndPoint, payload }) => filterPost({ inEndPoint, payload })
            },
            getDataNoParams: ({ inEndPoint }) => getDataNoParamsFunc({ inEndPoint }),
        },
    };
};
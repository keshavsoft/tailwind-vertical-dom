// /TableSearch/Utils/getRegex.js

const getRegex = ({
    searchValue
}) => {

    const escapedSearchValue =
        searchValue.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

    return new RegExp(
        `(${escapedSearchValue})`,
        "ig"
    );

};

export default getRegex;
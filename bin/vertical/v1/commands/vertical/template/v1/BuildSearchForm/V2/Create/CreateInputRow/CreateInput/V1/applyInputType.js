// applyInputType.js

const applyInputType = ({
    input,
    isDate,
    defaultToday,
    isSearch
}) => {
    if (isDate) {
        input.setAttribute("type", "date");
    }

    if (isDate && defaultToday) {
        input.valueAsDate = new Date();
    }

    if (isSearch) {
        input.setAttribute("type", "search");
    }
};

export { applyInputType };
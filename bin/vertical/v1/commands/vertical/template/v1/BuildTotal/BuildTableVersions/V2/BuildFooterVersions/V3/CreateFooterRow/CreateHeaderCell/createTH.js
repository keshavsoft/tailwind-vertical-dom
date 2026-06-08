const createTH = (key) => {
    const th = document.createElement("th");

    th.className =
        "px-6 py-3 text-left border-b border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer";

    th.dataset.key = key;

    return th;
};

export { createTH };
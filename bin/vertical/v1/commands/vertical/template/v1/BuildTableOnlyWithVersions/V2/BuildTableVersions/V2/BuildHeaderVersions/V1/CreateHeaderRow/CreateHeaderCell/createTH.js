const createTH = ({ inKey, inClassName }) => {
    // Create table header cell
    const th = document.createElement("th");

    // If external class is provided → respect and use it
    if (inClassName) {
        th.className = inClassName;
    } else {
        // Otherwise → fallback to default internal styling
        th.className =
            "px-6 py-3 text-left border-b border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer";
    };

    // Attach key for sorting / identification
    th.dataset.key = inKey;

    // Return configured header cell
    return th;
};

export { createTH };
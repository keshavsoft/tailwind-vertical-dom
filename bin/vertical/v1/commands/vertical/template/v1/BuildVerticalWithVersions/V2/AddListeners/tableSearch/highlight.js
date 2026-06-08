const escapeRegex = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const highlightText = (text, search) => {
    if (!search) return text;

    const safeSearch = escapeRegex(search);
    const regex = new RegExp(`(${safeSearch})`, "gi");

    return text.replace(regex, `<span class="bg-yellow-300">$1</span>`);
};

export { highlightText };
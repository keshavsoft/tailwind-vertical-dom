import { createTH } from "./createTH.js";
import { createWrapper } from "./createWrapper.js";

const createHeaderCell = (key) => {
    const th = createTH(key);

    const wrapper = createWrapper(key);

    // attach to TH
    th.appendChild(wrapper);

    return th;
};

export { createHeaderCell };
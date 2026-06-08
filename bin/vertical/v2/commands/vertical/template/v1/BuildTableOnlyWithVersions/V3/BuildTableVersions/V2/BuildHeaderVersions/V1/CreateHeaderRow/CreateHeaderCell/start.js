import { createTH } from "./createTH.js";
import { createWrapper } from "./createWrapper.js";

const createHeaderCell = ({ inKey, inClassName }) => {
    const th = createTH({ inKey, inClassName });

    const wrapper = createWrapper(inKey);

    // attach to TH
    th.appendChild(wrapper);

    return th;
};

export { createHeaderCell };
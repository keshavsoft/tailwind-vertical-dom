import { createFooterCell } from "./createFooterCell.js";

const startFunc = (keys, tr, options = {}) => {
    keys.forEach(key => {
        tr.appendChild(createFooterCell({
            key,
            onChangeFunc: options.onChange,
            showDataList: options.showDataList,
            inColumnsConfig: options.inColumnsConfig
        }));
    });
};

export { startFunc };

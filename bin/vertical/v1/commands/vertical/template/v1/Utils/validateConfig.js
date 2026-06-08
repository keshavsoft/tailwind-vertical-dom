// split into small validators
import { validateRequired } from "./validateRequired.js";
import { validateEndpoints } from "./validateEndpoints.js";
import { validateOptions } from "./validateOptions.js";

export const validateConfig = (cfg = {}) => {
    const errors = [];

    validateRequired(cfg, errors);
    validateEndpoints(cfg, errors);
    validateOptions(cfg, errors);

    if (errors.length) {
        throw new Error("Invalid initTable config:\n" + errors.join("\n"));
    }
};
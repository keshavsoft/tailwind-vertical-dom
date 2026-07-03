const validateOptions = (cfg, errors) => {
    if (!cfg.options) return;

    const { vertical, table } = cfg.options;

    if (vertical && "showVertical" in vertical && typeof vertical.showVertical !== "boolean") {
        errors.push("options.vertical.showVertical must be boolean");
    }

    if (table) {
        ["showRowOptions", "showFooter"].forEach((k) => {
            if (k in table && typeof table[k] !== "boolean") {
                errors.push(`options.table.${k} must be boolean`);
            }
        });
    }
};

export {
    validateOptions
};
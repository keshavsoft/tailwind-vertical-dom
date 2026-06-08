const applyMode = (config) => {

    if (config.mode === "create") {
        delete config.endPoints?.find;

        // 🔥 ADD THIS LINE
        config.options.table.showTable = false;

        if (config.layout.type === "vertical-table") {
            config.options.table.showTable = true;
            config.options.table.isDisabled = false;
        };

        if (config.layout.type === "table") {
            config.options.table.showTable = true;
            config.options.table.isDisabled = false;
            config.options.table.showFooter = true;

            config.options.vertical.showVertical = false;
        };
    };

    if (config.mode === "show") {
        if (config.layout.type === "vertical") {
            config.options.table.showTable = false;
            config.options.table.isDisabled = true;

            config.options.vertical.isDisabled = true;
            config.options.vertical.showSaveButton = false;

            if (!config.endPoints?.find) {
                throw new Error("find endpoint required");
            };
        };

    };

    return config;
};

export { applyMode };
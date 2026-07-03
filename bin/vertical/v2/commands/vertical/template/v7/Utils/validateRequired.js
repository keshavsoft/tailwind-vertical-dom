const validateRequired = (cfg, errors) => {
    if (!cfg.containerId || typeof cfg.containerId !== "string")
        errors.push("containerId is required (string)");

    if (!cfg.tableName || typeof cfg.tableName !== "string")
        errors.push("tableName is required (string)");

    // ✅ allow either data OR read
    const hasData = Array.isArray(cfg.data);
    const hasRead = typeof cfg.endPoints?.read === "string";

    if (!hasData && !hasRead)
        errors.push("provide either data OR endPoints.read");
};

export { validateRequired };
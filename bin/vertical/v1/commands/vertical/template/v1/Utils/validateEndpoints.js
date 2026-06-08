const validateEndpoints = (cfg, errors) => {
    if (!cfg.endPoints) return;

    ["create", "update", "delete", "read"].forEach((k) => {
        if (cfg.endPoints?.[k] && typeof cfg.endPoints[k] !== "string")
            errors.push(`endPoints.${k} must be a string`);
    });
};

export {
    validateEndpoints
};
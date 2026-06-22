import { initCreate }
    from "../bin/vertical/v2/commands/vertical/template/v5/entry.js";

(async () => {
    window.KSVerticalVersion = "v2.5";

    window.KSVertical = {};

    window.KSVertical.initCreate = initCreate;
})();
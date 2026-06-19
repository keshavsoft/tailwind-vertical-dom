import { initCreate }
    from "../bin/vertical/v2/commands/vertical/template/v4/entry.js";

(async () => {
    window.KSVerticalVersion = "v2.4";

    window.KSVertical = {};

    window.KSVertical.initCreate = initCreate;
})();
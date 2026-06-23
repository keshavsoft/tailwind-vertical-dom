import { initCreate }
    from "../bin/vertical/v2/commands/vertical/template/v6/entry.js";

(async () => {
    window.KSVerticalVersion = "v2.6";

    window.KSVertical = {};

    window.KSVertical.initCreate = initCreate;
})();
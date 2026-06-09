import { initCreate }
    from "../bin/vertical/v2/commands/vertical/template/v3/entry.js";

(async () => {
    window.KSVerticalVersion = "v2.2";

    window.KSVertical = {};

    window.KSVertical.initCreate = initCreate;
})();
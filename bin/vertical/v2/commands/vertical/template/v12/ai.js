import KSAiVertical from "./Core/KSAiVertical.js";

window.KSAiVertical = KSAiVertical;
window.KSAiVertical.defaults = KSAiVertical.defaults;

window.ks = window.ks || {};
window.ks.classes = window.ks.classes || {};
window.ks.classes.vertical = KSAiVertical;
window.ks.classes.verticalVersion = "v12";
// console.log("aaaaaaaaaaaaa ");

export default KSAiVertical;

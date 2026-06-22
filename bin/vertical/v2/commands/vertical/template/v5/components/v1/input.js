class KsInput extends HTMLElement {
    connectedCallback() {
        const label = this.getAttribute("label") || "";
        const name = this.getAttribute("name") || "";
        const type = this.getAttribute("type") || "text";

        this.innerHTML = `
            <div class="flex items-center space-x-4 w-1/2">
                <label class="w-36 text-sm font-medium">${label}</label>
                <input
                    type="${type}"
                    name="${name}"
                    class="flex-1 border rounded px-3 py-2">
            </div>
        `;
    }
}

customElements.define("ks-input", KsInput);

export default {};
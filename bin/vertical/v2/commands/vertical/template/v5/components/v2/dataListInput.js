class KsDataListInput extends HTMLElement {
    connectedCallback() {
        const label = this.getAttribute("label") || "";
        const name = this.getAttribute("name") || "";
        const list = this.getAttribute("list") || "";
        const source = this.getAttribute("source") || "";
        const value = this.getAttribute("ksInValue") || "------";

        this.innerHTML = `
            <div class="flex items-center space-x-4">
                <label class="w-24 text-sm font-medium">${label}</label>
                <input
                    class="flex-1 border rounded px-3 py-2"
                    name="${name}"
                    list="${list}"
                    data-data-list-fill-name="${name}"
                    data-data-list-source="${source}">
            </div>
        `;

        const input = this.querySelector("input");
        input.value = value;
        input.addEventListener("change", (e) => {
            this.onChange?.(e.target.value);
        });
    }
}

customElements.define("ks-datalist-input", KsDataListInput);

export default {};
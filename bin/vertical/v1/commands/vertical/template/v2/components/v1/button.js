class KsButton extends HTMLElement {
    connectedCallback() {
        const text = this.getAttribute("text") || "Save";

        this.innerHTML = `
            <button class="w-full mt-2 px-4 py-1 bg-green-500 text-white rounded">
                ${text}
            </button>
        `;

        this.querySelector("button").addEventListener("click", (e) => {
            e.preventDefault(); // stop refresh

            const form = this.closest("form");

            const data = Object.fromEntries(
                [...form.querySelectorAll("input")]
                    .map(input => [input.name, input.value])
            );

            console.log(data);
            this.onClick?.(data);
        });
    }
}

customElements.define("ks-button", KsButton);

export default {};
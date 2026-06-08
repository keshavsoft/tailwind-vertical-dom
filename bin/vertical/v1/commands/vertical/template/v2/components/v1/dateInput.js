class DateInput extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="flex items-center space-x-4 w-1/2">
                <label class="w-36 text-sm font-medium">InvoiceDate</label>
                <input type="date" name="InvoiceDate"
                       class="flex-1 border rounded px-3 py-2">
            </div>
        `;
    }
}

customElements.define("date-input", DateInput);

export default {};
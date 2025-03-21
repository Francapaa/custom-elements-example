export class Input extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {
        var shadow = this.attachShadow({ mode: "open" });

        const inputEl = document.createElement("input");
        inputEl.classList.add("input-element");
        inputEl.placeholder = "Ingresá tu nombre"; 
        const labelEl = document.createElement("label");
        labelEl.textContent = "Nombre"
        const style = document.createElement("style");
        style.textContent = `
            .input-element {
                font-size: 24px;
                text-align: center;
                font-family: Poppins;
                position: relative;
                left: 100px;
            }
        `;
        shadow.appendChild(inputEl);
        shadow.appendChild(style);
    }

}

customElements.define("input-element", Input);
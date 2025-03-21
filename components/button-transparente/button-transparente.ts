export class ButtonTransparente extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {
        var shadow = this.attachShadow({ mode: "open" });

        const buttonEl = document.createElement("button");
        buttonEl.textContent = "Volver";
        buttonEl.classList.add("button-element");
        const style = document.createElement("style");
        style.textContent = `
            .button-element {
                font-size: 24px;
                text-align: center;
                font-family: Poppins;
                position: relative;
                left: 100px;
                border: 1px solid black;
                background-color: transparent;
                width: 100px;
                height: 40px;
            }
        `;
        shadow.appendChild(buttonEl);
        shadow.appendChild(style);
    }

}

customElements.define ("button-transparente-element", ButtonTransparente);
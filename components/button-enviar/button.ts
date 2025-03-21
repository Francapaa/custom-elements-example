export class Button extends HTMLElement {
constructor (){

    super();
    this.render();
}

render (){
    var shadow = this.attachShadow({mode: "open"}); 
    
    const buttonEl = document.createElement("button");
    buttonEl.textContent = "Enviar";
    buttonEl.classList.add("button-element");
    const style = document.createElement("style");
    style.textContent = `
        .button-element {
            font-size: 24px;
            text-align: center;
            font-family: Poppins;
            position: relative;
            left: 25%;
            background-color: skyblue;
            border: none;
        }
    `;
    shadow.appendChild(buttonEl);
    shadow.appendChild(style);
}
}

customElements.define("button-element", Button);
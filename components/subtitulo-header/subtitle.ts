export class Subtitle extends HTMLElement {


    constructor (){

        super();
        this.render(); 
    }   

    render (){
        var shadow = this.attachShadow({mode: "open"}); 
        
        const subtitleEl = document.createElement("h2");
        subtitleEl.textContent = "Subtitulo";
        subtitleEl.classList.add("subtitle-element");
        const style = document.createElement("style");
        style.textContent = `
            .subtitle-element {
                font-size: 24px;
                text-align: center;
                font-family: Poppins;
                position: relative;
                left: 100px;
            }
        `;
        shadow.appendChild(subtitleEl);
        shadow.appendChild(style);
    }
}

customElements.define("subtitle-element", Subtitle);
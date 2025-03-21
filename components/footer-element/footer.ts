export class Footer extends HTMLElement {
    constructor (){
        super(); 
        this.render();
    }

    render (){
        var shadow = this.attachShadow({mode:"open"});

        const footerEl = document.createElement("footer");
        footerEl.textContent = "Footer";
        footerEl.classList.add("footer-element");
        const style = document.createElement("style");
        style.textContent = `
        .footer-element{
            text-align: center; 
            background-color: pink;
            font-size: 20px;
            font-family: Poppins;
            width:100%;
            height:200px; 
        }
        
        `
    }
}


customElements.define("footer-element", Footer); 
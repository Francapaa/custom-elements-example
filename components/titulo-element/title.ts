export class Title extends HTMLElement{

    constructor (){
        super(); 
        this.render(); 
    }


    render(){
        var shadow = this.attachShadow({mode: "open"});

        const titleEl = document.createElement("h1");
        titleEl.textContent = "Título de esta página"; 
        titleEl.classList.add("title-element");
        const style = document.createElement("style"); 
        style.textContent = `
        .title-element {
        font-size: 52px;
        text-align: center;
        font-family: Poppins; 
        position: relative;
        left: 5%; 
            }`; 
        shadow.appendChild(titleEl);
        shadow.appendChild(style);
    }
}

customElements.define("title-element", Title); 
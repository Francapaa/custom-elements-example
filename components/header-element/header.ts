
// este codigo no lo metemos dentro de una funcion porque sino lo encapsulamos y no es necesario
export class Header extends HTMLElement{
    constructor(){
        super(); //ESTO LLAMA AL CONSTRUCTOR DE HTMLElement ASEGURANDOSE DE QUE FUNCIONE BIEN 
        console.log("header creado"); 
        this.render();
    }

    render (){
        var shadow = this.attachShadow({mode: "open"});// El Shadow DOM permite encapsular el HTML, CSS y JS del componente, 
                                             // Evitando que sus estilos o estructura sean afectados por el documento principal.
        const headerEl = document.createElement("header");
        headerEl.classList.add("header-component");
        headerEl.textContent = "Header";
                                            
        const style = document.createElement("style");
        style.textContent = `
            .header-component {
                width: 100%;
                height: 200px; 
                background-color: red;
                color: black;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
            }
        `;
    
    
        shadow.appendChild(style); 
        shadow.appendChild(headerEl);
    }

}
console.log("header registrado"); 
customElements.define ("custom-header", Header); 
//CUSTOM ELEMENTS ES UN METODO NATIVO DE JS QUE REGISTRA UN NUEVO COMPONENTE WEB 
// LO QUE DEFINE EL NOMBRE DEL COMPONENTE ES LO QUE ESTA ENTRE "" EN CUSTOMELEMENTS.DEFINE
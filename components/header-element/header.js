"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
// este codigo no lo metemos dentro de una funcion porque sino lo encapsulamos y no es necesario
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super.call(this) || this; //ESTO LLAMA AL CONSTRUCTOR DE HTMLElement ASEGURANDOSE DE QUE FUNCIONE BIEN 
        console.log("header creado");
        _this.render();
        return _this;
    }
    Header.prototype.render = function () {
        var shadow = this.attachShadow({ mode: "open" }); // El Shadow DOM permite encapsular el HTML, CSS y JS del componente, 
        // Evitando que sus estilos o estructura sean afectados por el documento principal.
        var style = document.createElement("style");
        style.textContent = "\n            .header-component {\n                width: 100%;\n                height: 200px; \n                background-color: red;\n                color: black;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                font-size: 24px;\n            }\n        ";
        var headerEl = document.createElement("header");
        headerEl.classList.add("header-component");
        headerEl.textContent = "Header";
        shadow.appendChild(style);
        shadow.appendChild(headerEl);
        shadow.appendChild(headerEl);
    };
    return Header;
}(HTMLElement));
exports.Header = Header;
console.log("header registrado");
customElements.define("custom-header", Header);
//CUSTOM ELEMENTS ES UN METODO NATIVO DE JS QUE REGISTRA UN NUEVO COMPONENTE WEB 

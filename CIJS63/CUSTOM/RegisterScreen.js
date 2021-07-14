import { hello } from "./utils.js";

class RegisterScreen extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open',
        });
        this._id = 0;
    }

    static get observedAttributes(){
        return ["id"];
    }

    attributeChangedCallback(name, oldValue, newValue){
    }


    // được gọi 1 lần khi thêm dom đấy vào trong html
    connectedCallback() {
        const template = `
        <button id="demo">DEMO</button>
        `;
        this.shadow.innerHTML = template;
        console.log(this.shadow.getElementById("demo"));
        this.shadow.getElementById("demo").addEventListener('click', hello);
    }

    // được gọi 1 lần khi xóa dom khỏi html
    disconnectedCallback() {
    }
}

window.customElements.define('register-screen', RegisterScreen);
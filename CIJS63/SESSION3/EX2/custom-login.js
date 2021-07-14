import {listAccount} from "./database.js";


class Login extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open",
        });
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    connectedCallback() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="index.css">
        <div id="login" class="content">
            <div id="login_tittle" class="title">Đăng nhập</div>
            <form id="login_form">
                <p for="login_username">Tài khoản:</p>
                <input type="text" id="login_username" placeholder="Enter username.." autocomplete="off"><br>
                <p for="login_password">Mật khẩu:</p>
                <input type="password" id="login_password" placeholder="Enter password.." autocomplete="off">
            </form>
            <div class="button_submit">
                <button id="login_submit">Đăng nhập</button>
                <button id="change_signup">Đăng kí ngay</button>
            </div>
            <div class="result" id="login_result"><div>
        </div>`;
        this.shadow.innerHTML = template;
        this.shadow.getElementById("login_submit")
        .addEventListener("click", () => {
            const user = this.shadow.getElementById("login_username").value;
            const pass = this.shadow.getElementById("login_password").value;
            const result = this.shadow.getElementById("login_result");
            if(user == "" || pass == "") {
                result.textContent = "Cần nhập đủ các trường!";
            }
            else {
                const account = listAccount.find((ac) => ac.user == user);
                if(account) {
                    if(account.pass != pass) {
                        result.textContent = "Thông tin đăng nhập sai!";
                    }
                    else {
                        alert("Đăng nhập thành công!");
                        this.style.display = "none";
                        document.querySelector("h1").textContent = `Hello ${user}`;
                        this.shadow.querySelector("#login form").reset();
                        result.textContent = "";
                        document.getElementById("logout").style.display = "block";
                    }
                }
                else {
                    result.textContent = "Thông tin đăng nhập sai!";
                }
            }
        })
        this.shadow.getElementById("change_signup")
        .addEventListener('click', () => {
            this.style.display = "none";
            document.querySelector("custom-signup").style.display = "block";
        })
    }
}

window.customElements.define("custom-login", Login);

document.getElementById("logout").addEventListener('click', () => {
    document.getElementById("logout").style.display = "none";
    document.querySelector("custom-login").style.display = "block";
    document.querySelector("h1").textContent = "";
})
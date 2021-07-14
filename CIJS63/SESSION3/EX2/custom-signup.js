import {listAccount} from "./database.js";
import Account from "./Account.js";

class Signup extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open",
        });
    }

    static get observedAttributes() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    connectedCallback() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="index.css">
        <div id="signup" class="content">
            <i class="fa fa-close"></i><br>
            <div id="signup_tittle" class="title">Đăng kí</div>
            <form id="signup_form">
                <p for="signup_email">Email:</p>
                <input type="text" id="signup_email" placeholder="Enter email.." autocomplete="off"><br>
                <p for="signup_username">Tài khoản:</p>
                <input type="text" id="signup_username" placeholder="Enter username.." autocomplete="off"><br>
                <p for="signup_password">Mật khẩu:</p>
                <input type="password" id="signup_password" placeholder="Enter password.." autocomplete="off">
            </form>
            <div class="button_submit">
                <button id="signup_submit">Đăng kí</button>
            </div>
            <div class="result" id="signup_result"><div>
        </div>`;
        this.shadow.innerHTML = template;
        this.shadow.innerHTML = template;
        this.shadow.getElementById("signup_submit")
        .addEventListener("click", () => {
            const email = this.shadow.getElementById("signup_email").value;
            const user = this.shadow.getElementById("signup_username").value;
            const pass = this.shadow.getElementById("signup_password").value;
            const result = this.shadow.getElementById("signup_result");
            if(user == "" || pass == "" || email == "") {
                result.textContent = "Cần nhập đủ các trường!";
            }
            else {
                const checkEmail = listAccount.find((ac) => ac.email == email);
                const account = listAccount.find((ac) => ac.user == user);
                if(checkEmail) {
                    result.textContent = "Email đã tồn tại!"
                }
                else if(account) {
                    result.textContent = "Tài khoản đã tồn tại!"
                }
                else {
                    listAccount.push(new Account(user, email, pass));
                    alert("Đăng ký thành công!");
                    document.querySelector("custom-login").style.display = "block";
                    this.style.display = "none";
                    this.shadow.querySelector("#signup form").reset();
                    result.textContent = "";
                }
            }
        })
        this.shadow.querySelector(".fa-close")
        .addEventListener('click', () => {
            document.querySelector("custom-login").style.display = "block";
            this.style.display = "none";
        })
    }
}

window.customElements.define("custom-signup", Signup);
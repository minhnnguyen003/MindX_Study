import { sha1 } from "../utils.js";

class Login extends HTMLElement {
    constructor() {
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
        <link rel="stylesheet" href="./CSS/index.css">
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
            .addEventListener("click", async () => {
                const user = this.shadow.getElementById("login_username").value;
                const pass = this.shadow.getElementById("login_password").value;
                const result = this.shadow.getElementById("login_result");
                result.style.color = "red";
                if (user == "" || pass == "") {
                    result.textContent = "Cần nhập đủ các trường!";
                }
                else {
                    const responseUser = await firebase.firestore().collection("users").where("user", "==", user).where("password", "==", sha1(pass)).get();
                    if (!responseUser.empty) {
                        result.style.color = "green";
                        result.textContent = "Đăng nhập thành công!"
                        setTimeout(() => {
                            router.navigate("/main");
                        }, 500);
                    }
                    else {
                        result.textContent = "Thông tin đăng nhập sai!";
                    }
                }
            })
        this.shadow.getElementById("change_signup")
            .addEventListener('click', () => {
                router.navigate("/signup");
            })
    }
}

window.customElements.define("custom-login", Login);
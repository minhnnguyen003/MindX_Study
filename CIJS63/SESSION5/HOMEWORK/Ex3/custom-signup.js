import { verifyEmail, verifyPassword, sha1} from "./utils.js";

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
                <p for="signup_confirm">Nhập lại mật khẩu:</p>
                <input type="password" id="signup_confirm" placeholder="Enter password.." autocomplete="off">
            </form>
            <div class="button_submit">
                <button id="signup_submit">Đăng kí</button>
            </div>
            <div class="result" id="signup_result"><div>
        </div>`;
        this.shadow.innerHTML = template;
        this.shadow.innerHTML = template;
        this.shadow.getElementById("signup_submit")
        .addEventListener("click", async () => {
            const email = this.shadow.getElementById("signup_email").value;
            const user = this.shadow.getElementById("signup_username").value;
            const pass = this.shadow.getElementById("signup_password").value;
            const confirm = this.shadow.getElementById("signup_confirm").value;
            const result = this.shadow.getElementById("signup_result");
            result.style.color = "red";
            if(user == "" || pass == "" || email == "") {
                result.textContent = "Cần nhập đủ các trường!";
            }
            else if(!verifyEmail(email)) {
                result.textContent = "Email không hợp lệ!";
            }
            else if(!verifyPassword(pass)) {
                result.textContent = "Mật khẩu chỉ bao gồm chữ hoặc số, tối thiểu 8 kí tự chứa ít nhất 1 chữ số, 1 chữ in thường và 1 chữ in hoa!";
            }
            else if(pass != confirm) {
                result.textContent = "Nhập lại mật khẩu không đúng!";
                this.shadow.getElementById("signup_password").value = "";
                this.shadow.getElementById("signup_confirm").value = "";
            }
            else {
                const responseEmail = await firebase.firestore().collection("users").where("email", "==", email).get();
                const responseAccount = await firebase.firestore().collection("users").where("user", "==", user).get();
                if(!responseEmail.empty) {
                    result.textContent = "Email đã tồn tại!";
                }
                else if(!responseAccount.empty) {
                    result.textContent = "Tài khoản đã tồn tại!";
                }
                else {
                    let password = sha1(pass);
                    await firebase.firestore().collection("users").add({user, email, password});
                    result.style.color = "green";
                    result.textContent = "Đăng ký thành công!";
                    setTimeout(() => {
                        router.navigate("/login");
                    }, 500)
                }
            }
        })
        this.shadow.querySelector(".fa-close")
        .addEventListener('click', () => {
            router.navigate("/login");
        })
    }
}

window.customElements.define("custom-signup", Signup);
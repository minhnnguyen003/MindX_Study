import Employee from "./Employee.js";

class UpdateForm extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open",
        });
    }

    static get observedAttributes() {
        return ["class", "name", "age", "image"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    connectedCallback() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <div id="update" class="form">
            <form>
                <i class="fa fa-close add_close add_cancel"></i><br><br>
                <div class="title">Cập nhật thông tin</div>
                <label for="update_name">Tên <span style="color: red;">*</span>:</label><br>
                <input type="text" id="update_name" placeholder="Nhập tên..." autocomplete="off"><br>
                <label for="update_age">Tuổi <span style="color: red;">*</span>:</label><br>
                <input type="text" id="update_age" placeholder="Nhập tuổi..." autocomplete="off"><br>
                <label for="update_image">Link ảnh:</label><br>
                <input type="text" id="update_image" placeholder="Nhập link ảnh..." autocomplete="off"><br>
            </form>
            <p id="update_result" class="result"></p>
            <div class="center">
                <button class="button button_add" id="button_update">Update</button>
                <button class="button button_cancel add_cancel" id="button_cancel">Cancel</button>
            </div>
        </div>`;
        this.shadow.innerHTML = template;

        // close form
        Array.from(this.shadow.querySelectorAll(".add_cancel")).forEach((e) => {
            e.addEventListener("click", () => {
                this.shadow.getElementById("update").style.display = "none";
            })
        })

        //process update
        this.shadowRoot.getElementById("button_update").addEventListener("click", () => {
            const name = this.shadowRoot.getElementById("update_name").value;
            const age = this.shadowRoot.getElementById("update_age").value;
            let image = this.shadowRoot.getElementById("update_image").value;
            const result = this.shadowRoot.getElementById("update_result");
            result.style.color = "red";
            if(name == "" || age == ""){
                result.textContent = "Trường * không được bỏ trống!";
            }
            else if(isNaN(Number(age)) || Number(age) <= 0) {result.textContent = `Tuổi phải là 1 số nguyên dương!`;}
            else{
                image = image == "" ? "https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-2.jpg" : image;
                firebase.firestore().collection("employees").doc(this.class).update({name, age, image}).then(() => {
                    const card = document.getElementById(this.class).shadowRoot;
                    card.querySelector(".employee_name").textContent = name;
                    card.querySelector(".employee_age").textContent = age;
                    card.querySelector("img").src = image;
                    result.textContent = "Cập nhật thành công!";
                    result.style.color = 'green';
                    setTimeout(() => {this.shadow.getElementById("update").style.display = "none";}, 500);
                })
            }
        })
    }

    get class() {
        return this.getAttribute("class");
    }

    set class(val) {
        this.setAttribute("class", val);
    }
}

window.customElements.define("custom-update", UpdateForm);
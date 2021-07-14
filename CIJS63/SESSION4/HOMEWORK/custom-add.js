import Employee from "./Employee.js";
import { getNewTime } from "./supports.js";

class AddForm extends HTMLElement {
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
        <link rel="stylesheet" href="style.css">
        <div id="icon">
            <button class="icon" id="icon_add"><i class="material-icons">&#xe7fe;</i></button>
        </div>
        <div id="add" class="form">
            <form>
                <i class="fa fa-close add_close add_cancel"></i><br><br>
                <div class="title">Thêm nhân viên mới</div>
                <label for="add_name">Tên <span style="color: red;">*</span>:</label><br>
                <input type="text" id="add_name" placeholder="Nhập tên..." autocomplete="off"><br>
                <label for="add_age">Tuổi <span style="color: red;">*</span>:</label><br>
                <input type="text" id="add_age" placeholder="Nhập tuổi..." autocomplete="off"><br>
                <label for="add_image">Link ảnh:</label><br>
                <input type="text" id="add_image" placeholder="Nhập link ảnh..." autocomplete="off"><br>
            </form>
            <p id="add_result" class="result"></p>
            <div class="center">
                <button class="button button_add" id="button_add">Add</button>
                <button class="button button_cancel add_cancel" id="button_cancel">Cancel</button>
            </div>
        </div>`;
        this.shadow.innerHTML = template;

        //open form
        this.shadow.getElementById("icon_add").addEventListener("click", () => {
            this.shadow.getElementById("add").style.display = "block";
            this.shadow.querySelector("#add form").reset();
            this.shadow.getElementById("add_result").textContent = "";
        });

        // close form
        Array.from(this.shadow.querySelectorAll(".add_cancel")).forEach((e) => {
            e.addEventListener("click", () => {
                this.shadow.getElementById("add").style.display = "none";
            })
        })

        //process add
        this.shadow.getElementById("button_add").addEventListener("click", () => {
            const name = this.shadow.getElementById("add_name").value;
            const age = this.shadow.getElementById("add_age").value;
            let image = this.shadow.getElementById("add_image").value;
            const result = this.shadow.getElementById("add_result");
            result.style.color = 'red';
            if(name == "" || age == "") {
                result.textContent = `Trường * bắt buộc nhập!`;
            }
            else if(isNaN(Number(age)) || Number(age) <= 0) {result.textContent = `Tuổi phải là 1 số nguyên dương!`;}
            else {
                image = image == "" ? "https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-2.jpg" : image;
                firebase.firestore().collection("employees").add({name, age, image, create : getNewTime()}).then((res) => {
                    const newEmployee = new Employee(res.id, name, age, image, getNewTime());
                    document.getElementById("employee_content").insertAdjacentHTML('beforeend', newEmployee.show());
                    result.textContent = "Thêm thành công!";
                    result.style.color = 'green';
                    setTimeout(() => {this.shadow.getElementById("add").style.display = "none";}, 500);
                })
            }
        })
    }
}

window.customElements.define("custom-add", AddForm);
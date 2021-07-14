import Employee from "./Employee.js";

class MainScreen extends HTMLElement {
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
        <link rel="stylesheet" href="./style.css">
        <div id="employee">
            <custom-update></custom-update>
            <custom-add></custom-add>
            <div id="icon">
                <button class="icon" id="icon_add"><i class="material-icons">&#xe7fe;</i></button>
                <button class="icon" id="icon_logout"><i class="fa fa-sign-out"></i></button>
            </div>
            <div id="employee_title">Quản lý nhân viên</div>
            <ul id="employee_content">
            </ul>
        </div>`;
        this.shadow.innerHTML = template;

        //getData

        firebase.firestore().collection("employees").get()
            .then((res) => {
                let stringData = "";
                const listEmployee = res.docs.sort((a, b) => a.data().create - b.data().create);
                listEmployee.forEach((doc) => {
                    const data = doc.data();
                    const employee = new Employee(doc.id, data.name, data.age, data.image, data.create);
                    stringData += employee.show();
                })
                this.shadow.getElementById("employee_content").innerHTML = stringData;
            })


        // open form add

        this.shadow.getElementById("icon_add").addEventListener("click", () => {
            this.shadow.querySelector("custom-add").style.display = "block";
            this.shadow.querySelector("custom-add").shadowRoot.querySelector("#add form").reset();
            this.shadow.querySelector("custom-add").shadowRoot.getElementById("add_result").textContent = "";
        })

        // logout 

        this.shadow.getElementById("icon_logout").addEventListener("click", () => {
            router.navigate("/login");
        })
    }
}

window.customElements.define("main-screen", MainScreen);
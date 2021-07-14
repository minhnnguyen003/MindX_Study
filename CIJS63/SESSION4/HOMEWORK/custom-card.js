class Card extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: "open",
        });
    }

    static get observedAttributes() {
        return ["id", "name", "age", "image", "create"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    connectedCallback() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <li class="employee">
            <div class="employee_img">
                <i class="fa fa-close" id="delete"></i>
                <i class="fa fa-edit" id="update"></i>
                <img src="${this.image}">
            </div><hr>
            <div class="employee_name">${this.name}</div><hr>
            <div class="employee_age">Tuổi: ${this.age}</div><hr>
            <div class="employee_create">Ngày thêm: ${this.create}</div>
        </li>`;
        this.shadow.innerHTML = template;

        this.shadow.getElementById("delete").addEventListener('click', () => {
            firebase.firestore().collection("employees").doc(this.id).delete().then(() => {
                document.getElementById(this.id).remove();
            })
        })

        //get form update
        const updateForm = document.querySelector("custom-update");
        const nameID = updateForm.shadowRoot.getElementById("update_name");
        const ageID = updateForm.shadowRoot.getElementById("update_age");
        const imageID = updateForm.shadowRoot.getElementById("update_image");
        const result = updateForm.shadowRoot.getElementById("update_result");

        this.shadow.getElementById("update").addEventListener("click", () => {
            updateForm.shadowRoot.getElementById("update").style.display = "block";
            result.textContent = "";
            nameID.value = this.name;
            ageID.value = this.age;
            imageID.value = this.image;
            updateForm.class = this.id;
        })
    }

    get id() {
        return this.getAttribute("id");
    }

    set id(val) {
        this.setAttribute("id", val);
    }

    get name() {
        return this.getAttribute("name");
    }

    set name(val) {
        this.setAttribute("name", val);
    }
    get age() {
        return this.getAttribute("age");
    }

    set age(val) {
        this.setAttribute("age", val);
    }

    get image() {
        return this.getAttribute("image");
    }

    set image(val) {
        this.setAttribute("image", val);
    }

    get create() {
        return this.getAttribute("create");
    }

    set create(val) {
        this.setAttribute("create", val);
    }
}

window.customElements.define("custom-card", Card);
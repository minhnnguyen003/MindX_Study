class Card extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: "open",
        });
    }

    static get observedAttributes() {
        return ["index" , "name", "age", "image", "create"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    connectedCallback() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="index.css">
        <li class="profile_staff">
            <div class="profile_img">
                <i class="fa fa-close" onclick="import('./main.js').then(e => e.deleteList(${this.index}))"></i>
                <img src="${this.image}">
            </div><hr>
            <div class="staff_name">${this.name}</div><hr>
            <div class="staff_age">Tuổi: ${this.age}</div><hr>
            <div class="staff_create">Ngày thêm: ${this.create}</div>
        </li>`;
        this.shadow.innerHTML = template;
    }

    get index() {
        return this.getAttribute("index");
    }

    set index(val) {
        this.setAttribute("index", val);
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

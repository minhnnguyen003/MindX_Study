import { style } from "../Helpers.js";

class MainScreen extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open',
        });
    }

    connectedCallback() {
        const template = `
        ${style}
        <di id="bookList" class="content">
            <div id="bookList_icon">
                <button class="icon" id="bookList_add"><i class="fas fa-book-medical"></i></button>
            </div>
            <!-- <div class="pop-up-container">
                <div id="recycle">
                
                </div>
            </div> -->
            <div id="bookList_title" class="title">Book List</div><hr>
            <div id="bookList_content">
            </div>        
        </div>`;
        this.shadow.innerHTML = template;

        // get form add
        this.shadow.getElementById('bookList_add').addEventListener('click', () => {
            document.querySelector('form-add').style.display = "block";
            document.querySelector('form-add').shadow.querySelector('form').reset();
        })
    }
}

window.customElements.define('main-screen', MainScreen);
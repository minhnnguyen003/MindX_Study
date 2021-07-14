import { noneHTMLForm } from "../supports.js";

class MainScreen extends HTMLElement{
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
        <link rel="stylesheet" href="./CSS/style.css">
        <div id="store" class="content">
        <div id="store_icon">
            <button class="icon" id="store_add">+</button>
            <button class="icon" id="store_cost">$</button>
            <button class="icon" id="icon_logout"><i class="fa fa-sign-out"></i></button>
        </div>
        <custom-add></custom-add>
        <div id="sell">
            <i class="fa fa-close sell_close" class="fa fa-close"></i><br><br>
            <div id="sell_title" class="title">Doanh thu</div>
            <div id="sell_content">
                <table>
                </table>
                <div id="sumCost">Tổng tiền: 0$</div>
            </div>
        </div>
        <div id="store_title" class="title">Quản lý cửa hàng</div>
        <div id="del_result"></div>
        <div id="store_content">
            <div id="store_houseware" class="store_type">
                <div class="type_title">Đồ gia dụng<span>-10%</span></div>
                <hr>
                <ul id="houseware" class="list_product">
                </ul>
            </div>
            <div id="store_clothes" class="store_type">
                <div class="type_title">Quần áo<span>-5%</span></div>
                <hr>
                <ul id="clothes" class="list_product">
                </ul>
            </div>
            <div id="store_food" class="store_type">
                <div class="type_title">Thức ăn<span>-2%</span></div>
                <hr>
                <ul id="food" class="list_product">
                </ul>
            </div>
        </div>
    </div> `;
    this.shadow.innerHTML = template;

    //get form add 
    this.shadow.getElementById("store_add").addEventListener('click', () => {
        this.shadow.querySelector('custom-add').style.display = "block";
        noneHTMLForm();
    })

    // logout 

    this.shadow.getElementById("icon_logout").addEventListener("click", () => {
        router.navigate("/login");
    })
    }
}

window.customElements.define('main-screen', MainScreen)
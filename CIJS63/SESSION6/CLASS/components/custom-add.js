import { getChangeForm, addProduct} from "../supports.js";

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
        <link rel="stylesheet" href="./CSS/style.css">
        <div id="add">
            <form>
                <i class="fa fa-close add_close icon-close-add"></i><br><br>
                <div id="add_title" class="title">Thêm sản phẩm mới</div>
                <label for="add_id">ID sản phẩm:</label><br>
                <input type="text" id="add_id" placeholder="Nhập ID sản phẩm..." autocomplete="off"><br>
                <label for="add_name">Tên sản phẩm:</label><br>
                <input type="text" id="add_name" placeholder="Nhập tên sản phẩm..." autocomplete="off"><br>
                <label for="add_cost">Giá:</label><br>
                <input type="text" id="add_cost" placeholder="Nhập giá..." autocomplete="off"><br>
                <label for="type_product">Loại sản phẩm:</label>
                <select id="type_product">
                    <option value="none"></option>
                    <option value="houseware">Đồ gia dụng</option>
                    <option value="clothes">Quần áo</option>
                    <option value="food">Thức ăn</option>
                </select>
                <div class="form_houseware">
                    <label for="add_reli">Độ bền:</label><br>
                    <input type="text" id="add_reli" placeholder="Nhập độ bền..." autocomplete="off"><br>
                </div>
                <div class="form_clothes">
                    <label for="add_origin">Xuất xứ:</label><br>
                    <input type="text" id="add_origin" placeholder="Nhập xuất xứ..." autocomplete="off"><br>
                    <label for="add_mater">Chất liệu:</label><br>
                    <input type="text" id="add_mater" placeholder="Nhập chất liệu..." autocomplete="off"><br>
                </div>
                <div class="form_food">
                    <label for="add_fla">Vị:</label><br>
                    <input type="text" id="add_fla" placeholder="Nhập vị..." autocomplete="off"><br>
                </div>
            </form>
            <p id="add_result" class="result"></p>
            <div class="center">
                <button class="button button_add" id="button_add">Add</button>
                <button class="button button_cancel icon-close-add" id="button_cancel">Cancel</button>
            </div>
        </div>`;
        this.shadow.innerHTML = template;

        this.shadow.getElementById("type_product").addEventListener('change', getChangeForm);

        //close form add
        Array.from(this.shadow.querySelectorAll(".icon-close-add")).forEach((dom) => {
            dom.addEventListener('click', () => {
                this.style.display = "none";
            })
        })

        // process add
        this.shadow.getElementById("button_add").addEventListener('click', addProduct);
    }
}

window.customElements.define('custom-add', AddForm);
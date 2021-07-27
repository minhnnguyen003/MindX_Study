import Book from "../Book.js";
import { getData, style } from "../Helpers.js";

class FormAdd extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    const template = `
        ${style}
        <div class="pop-up-container">
            <div id="add">
                <form>
                    <i class="fas fa-times-circle add_close"></i><br><br>
                    <div class="title">Thêm sách mới</div>
                    <label for="add_id">Mã sách:</label><br>
                    <input type="text" id="add_id" placeholder="Ab123..." autocomplete="off"><br>
                    <label for="add_title">Tên sách:</label><br>
                    <input type="text" id="add_title" placeholder="Harry Potter..." autocomplete="off"><br>
                    <label for="add_author">Tác giả:</label><br>
                    <input type="text" id="add_author" placeholder="J.K.Rowling..." autocomplete="off"><br>
                </form>
                <p id="add_result" class="result"></p>
                <div class="center">
                    <button class="button button_add" id="button_add">Add</button>
                    <button class="button button_cancel" id="button_cancel">Cancel</button>
                </div>
            </div>
        </div>`;
    this.shadow.innerHTML = template;

    // close form
    const closeFormAdd = () => {
      this.style.display = "none";
    };

    this.shadow
      .querySelector(".add_close")
      .addEventListener("click", closeFormAdd);
    this.shadow
      .querySelector(".button_cancel")
      .addEventListener("click", closeFormAdd);

    // add failed

    const addFailed = (str) => {
      const result = this.shadow.getElementById("add_result");
      result.style.color = "red";
      result.textContent = str;
      setTimeout(() => {
        result.textContent = "";
      }, 700);
    };

    // process add
    this.shadow.querySelector(".button_add").addEventListener("click", () => {
      const bookId = this.shadow.getElementById("add_id").value;
      const title = this.shadow.getElementById("add_title").value;
      const author = this.shadow.getElementById("add_author").value;
      const result = this.shadow.getElementById("add_result");
      if (bookId == "" || title == "" || author == "") {
        addFailed("Nhập đủ mã sách, tên sách, tác giả!");
      } else {
        const img = "./Image/image_book.jpeg";
        let listBook = getData();
        if (listBook == null) {
          listBook = {};
        }
        if (listBook[bookId] != null) {
          addFailed("Mã sách đã tồn tại!");
        } else {
          listBook[bookId] = {title, author, img };
          localStorage.setItem('listBook', JSON.stringify(listBook));
          const newBook = new Book(bookId, title, author, img);
          document
            .querySelector("main-screen")
            .shadow.querySelector("#bookList_content")
            .insertAdjacentHTML("beforeend", newBook.show());
          result.style.color = "green";
          result.textContent = "Thêm thành công";
          setTimeout(() => {
            result.textContent = "";
            this.style.display = 'none';
          }, 700);
        }
      }
    });
  }
}

window.customElements.define("form-add", FormAdd);

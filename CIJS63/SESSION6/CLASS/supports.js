export const noneHTMLForm = () => {
    
    document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.querySelector(".form_houseware").style.display = "none";
    document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.querySelector(".form_clothes").style.display = "none";
    document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.querySelector(".form_food").style.display = "none";
}

export const getChangeForm = () => {
    const type = document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.getElementById("type_product").value;
    noneHTMLForm();
    if (type == "none") {
    }
    else if (type == "houseware") {
        document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.querySelector(".form_houseware").style.display = "block";
    }
    else if (type == "clothes") {
        document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.querySelector(".form_clothes").style.display = "block";
    }
    else if (type == "food") {
        document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.querySelector(".form_food").style.display = "block";
    }
}

export const addProduct = () => {
    const id =  document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.getElementById("add_id").value;
    const name =  document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.getElementById("add_name").value;
    const cost =  document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.getElementById("add_cost").value;
    const type =  document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.getElementById("type_product").value;
    const result =  document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.getElementById("add_result");
    result.style.color = "red";
    if (type == "none") {
        result.textContent = "Cần chọn loại sản phẩm!";
    }
    // else if (checkID(id)) {
    //     result.textContent = "Mã ID đã được sử dụng!";
    // }
    else if (type == "houseware") {
        const reli =  document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.getElementById("add_reli").value;
        if (id == "" || name == "" || cost == "" || reli == "") {
            result.textContent = "Cần nhập đủ các trường!";
        }
        else {
            firebase.firestore().collection("products").add({id, name, cost, type, reli});
            document.querySelector("main-screen").shadowRoot.getElementById("houseware").insertAdjacentHTML("beforeend", )
            addResult();
        }
    }
    else if (type == "clothes") {
        const origin =  document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.getElementById("add_origin").value;
        const mater =  document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.getElementById("add_mater").value;
        if (id == "" || name == "" || cost == "" || origin == "" || mater == "") {
            result.textContent = "Cần nhập đủ các trường!";
        }
        else {
            firebase.firestore().collection("products").add({id, name, cost, type, origin, mater});
            addResult();
        }
    }
    else if (type == "food") {
        const fla =  document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.getElementById("add_fla").value;
        if (id == "" || name == "" || cost == "" || fla == "") {
            result.textContent = "Cần nhập đủ các trường!";
        }
        else {
            firebase.firestore().collection("products").add({id, name, cost, type, fla});
            addResult();
        }
    }
}

export const addResult = () => {
    const result = document.querySelector("main-screen").shadowRoot.querySelector("custom-add").shadowRoot.getElementById("add_result");
    result.style.color = "green";
    result.textContent = "Thêm thành công!";
    setTimeout(closeAddForm, 1000);
}

export const closeAddForm = () => {
    document.querySelector("main-screen").shadowRoot.querySelector("custom-add").style.display = "none";
}

const getDate = () => {
    const newTime = new Date();
    const stringDate = `${newTime.getDate()} -${Number(newTime.getMonth()) + 1} -${newTime.getFullYear()} `;
    return stringDate;
}

const getAddForm = () => {
    document.getElementById("store_add").style.display = "none";
    document.getElementById("store_cost").style.display = "none";
    document.getElementById("add").style.display = "block";
    document.querySelector("#add form").reset();
    document.getElementById("add_result").textContent = "";
    noneHTMLForm();
}

const closeAddForm = () => {
    document.getElementById("store_add").style.display = "block";
    document.getElementById("store_cost").style.display = "block";
    document.getElementById("add").style.display = "none";
}

const noneHTMLForm = () => {
    document.querySelector(".form_houseware").style.display = "none";
    document.querySelector(".form_clothes").style.display = "none";
    document.querySelector(".form_food").style.display = "none";
}

const getChangeForm = () => {
    const type = document.getElementById("type_product").value;
    noneHTMLForm();
    if (type == "none") {
    }
    else if (type == "houseware") {
        document.querySelector(".form_houseware").style.display = "block";
    }
    else if (type == "clothes") {
        document.querySelector(".form_clothes").style.display = "block";
    }
    else if (type == "food") {
        document.querySelector(".form_food").style.display = "block";
    }
}

export {getDate, getAddForm, closeAddForm, noneHTMLForm, getChangeForm};
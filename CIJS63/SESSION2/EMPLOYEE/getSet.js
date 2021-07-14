//get date
const getDate = () => {
    const newTime = new Date();
    const stringDate = `${newTime.getDate()}-${Number(newTime.getMonth()) + 1}-${newTime.getFullYear()}`;
    return stringDate;
}

// get this form
const getForm = (nameForm) => {
    document.getElementById(nameForm).style.display = "block";
    document.getElementById(`icon_add`).style.display = "none";
    document.getElementById(`icon_update`).style.display = "none";
    document.getElementById(`icon_back`).style.display = "none";
    document.querySelector(`#${nameForm} form`).reset();
    document.getElementById(`${nameForm}_result`).textContent = "";
}

// close this form
const closeForm = (nameForm) => {
    document.getElementById(nameForm).style.display = "none";
    document.getElementById(`icon_add`).style.display = "block";
    document.getElementById(`icon_update`).style.display = "block";
    document.getElementById(`icon_back`).style.display = "block";
}

// return page group
const backPage = () => {
    document.getElementById("list_group").style.display = "block";
    document.querySelector(".changePage").id = "show_group";
}

export {getDate, getForm, closeForm, backPage};
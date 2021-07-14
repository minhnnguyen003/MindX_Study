const getFormAdd = () => {
    document.getElementById("add").style.display = "block";
    document.getElementById("icon_add").style.display = "none";
    document.querySelector("#add form").reset();
    document.getElementById("add_result").textContent = "";
}

const closeFormAdd = () => {
    document.getElementById("add").style.display = "none";
    document.getElementById("icon_add").style.display = "block";
    document.getElementById("add_result").textContent = "";
}

const getDate = () => {
    let stringDate = "";
    let newTime = new Date();
    stringDate += String(newTime.getDate()) + "-" + (Number(newTime.getMonth()) + 1) + "-" + newTime.getFullYear();
    return stringDate;
}

export {getFormAdd, closeFormAdd, getDate};
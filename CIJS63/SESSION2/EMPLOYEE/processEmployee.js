import listGroup from "./database.js";
import Employee from "./Employee.js";
import {getDate, closeForm} from "./getSet.js";


//add employee to group
const addEmployee = () => {
    const groupID = document.querySelector(".changePage").id;
    const addID = document.getElementById("add_id").value;
    const name = document.getElementById("add_name").value;
    const image = document.getElementById("add_image").value;
    let result = document.getElementById("add_result");
    result.style.color = "red";
    if(addID == "" || name == "" || image == "") {
        result.textContent = "Cần nhập đủ các trường!";
    }
    else if (listGroup[groupID].employees.some((data) => {
        return data.id == addID;})){
        result.textContent = "ID đã tồn tại trong nhóm";
    }
    else {
        const newEmployee = new Employee(addID, name, image, getDate());
        document.getElementById("profile").insertAdjacentHTML(`beforeend`, newEmployee.show());
        listGroup[groupID].employees.push(newEmployee);
        result.style.color = "green";
        result.textContent = "Thêm thành công";
        setTimeout(() => {closeForm('add')}, 1000);
    }
}

// update employee
const updateEmployee = () => {
    const groupID = document.querySelector(".changePage").id;
    const addID = document.getElementById("update_id").value;
    const name = document.getElementById("update_name").value;
    const image = document.getElementById("update_image").value;
    let result = document.getElementById("update_result");
    result.style.color = "red";
    if(addID == "") {
        result.textContent = "Cần nhập ID!";
    }
    else if (listGroup[groupID].employees.every((data) => {
        return data.id != addID;
    })) {
        result.textContent = "Không tìm thấy ID trong nhóm";
    }
    else {
        listGroup[groupID].update(addID, {name, image});
        if(name != "") {document.getElementById(`name_${addID}`).textContent = name;};
        if(image != "") {document.getElementById(`image_${addID}`).src = image;};
        result.style.color = "green";
        result.textContent = "Cập nhật thành công";
        setTimeout(() => {closeForm('update')}, 1000);
    }
}

// delete employee
const deleteEmployee = (idEmployee) => {
    const groupID = document.querySelector(".changePage").id;
    listGroup[groupID].delete(idEmployee);
    document.getElementById(idEmployee).remove();
}

export {addEmployee, updateEmployee, deleteEmployee};
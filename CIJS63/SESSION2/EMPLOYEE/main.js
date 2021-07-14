import EmployeeCollection from "./EmployeeCollection.js";
import listGroup from "./database.js";
import {closeForm} from "./getSet.js";

const getListGroup = () => {
    let stringHTML = "";
    for(let index in listGroup){
        stringHTML += `
        <li class="content_profile" onclick="import('./main.js').then(e => e.getGroup('${index}'))">
            <div>ID Group: ${index}</div>
            <div>Name: ${listGroup[index]._name}</div>
            <div>Owner: ${listGroup[index]._owner}</div>
        </li>`
    }
    document.getElementById("list_group_content").innerHTML = stringHTML;
}

getListGroup();

export const addListGroup = () => {
    const addID = document.getElementById("add_id_group").value;
    const name = document.getElementById("add_name_group").value;
    const owner = document.getElementById("add_owner_group").value;
    let result = document.getElementById("add_group_result");
    result.style.color = "red";
    if(addID == "" || name == "" || owner == ""){
        result.textContent = "Cần nhập đủ các trường!";
    }
    else if(listGroup[addID] != null) {
        result.textContent = "ID nhóm đã tồn tài!";
    }
    else {
        document.getElementById("list_group_content").insertAdjacentHTML(`beforeend`, `
        <li class="content_profile" onclick="import('./main.js').then(e => e.getGroup('${addID}'))">
            <div>ID Group: ${addID}</div>
            <div>Name: ${name}</div>
            <div>Owner: ${owner}</div>
        </li>`)
        listGroup[addID] = new EmployeeCollection(addID, name, owner);
        result.style.color = "green";
        result.textContent = "Tạo thành công!";
        setTimeout(() => {closeForm('add_group')}, 1000);
    }
}

export const getGroup = (groupID) => {
    document.getElementById("list_group").style.display = "none";
    document.querySelector(".changePage").id = groupID;
    document.getElementById("profile").innerHTML = listGroup[groupID].show();
}
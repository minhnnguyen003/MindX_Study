import "./custom-card.js";
import listProfile from "./database.js";
import Person from "./Person.js";
import {getDate, closeFormAdd} from "./supports.js";

export const addList = () => {
    const name = document.getElementById("add_name").value;
    const age = document.getElementById("add_age").value;
    const male = document.getElementById("add_male");
    const female = document.getElementById("add_female");
    const result= document.getElementById("add_result");
    if (name == "" || age == "" || (!male.checked && !female.checked)){
        result.style.color = "red";
        result.textContent = "Cần nhập đủ các trường!";
    }
    else{
        const gender = male.checked ? "Nam" : "Nữ";
        const created_at = getDate();
        listProfile.push(new Person(name, age, gender, created_at));
        if(gender == "Nam") {
            document.getElementById("profile").insertAdjacentHTML('beforeend', `
            <custom-card index="${listProfile.length-1}" name="${name}" age="${age}" create="${created_at}" 
            image="https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-2.jpg"></custom-card>`);
        }
        else {
            document.getElementById("profile").insertAdjacentHTML('beforeend', `<custom-card index="${listProfile.length-1}" name="${name}" age="${age}" create="${created_at}" image="https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-3.jpg"></custom-card>`);
        }
        result.style.color = "Green";
        result.textContent = "Thêm thành công!";
        setTimeout(() => {
            closeFormAdd();
        }, 500);
    }
}

export const deleteList = (index) => {
    listProfile.splice(index, 1);
    const listCard = Array.from(document.querySelectorAll("custom-card"));
    const delCard = listCard.find((value) => {
        return value.index == index;
    });
    delCard.remove();
}


const getListHTML = () => {
    let content = "";
    let index = 0;
    listProfile.forEach((value) => {
        if (value.gender == "Nam") {
            content += `
        <custom-card index="${index}" name="${value.name}" age="${value.age}" create="${value.create_at}" image="https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-2.jpg"></custom-card>`;
        }
        else{
            content += `
        <custom-card index="${index}" name="${value.name}" age="${value.age}" create="${value.create_at}" image="https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-3.jpg"></custom-card>`;
        }
        index++;
    })
    document.getElementById("profile").innerHTML = content;
}

getListHTML();


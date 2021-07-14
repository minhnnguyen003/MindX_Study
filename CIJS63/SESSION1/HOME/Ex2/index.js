let listProfile = [
    {
        name: "Nguyễn Hữu Dũng",
        age: 21,
        gender: "Nam",
        created_at: "27-9-2020"
    },
    {
        name: "Vũ Thùy Dung",
        age: 21,
        gender: "Nữ",
        created_at: "30-10-2020"
    },
    {
        name: "Nguyễn Đức Tân",
        age: 24,
        gender: "Nam",
        created_at: "25-10-2020"
    },
    {
        name: "Nguyễn Thị Trang",
        age: 26,
        gender: "Nữ",
        created_at: "2-2-2021"
    },
    {
        name: "Trần Thành Công",
        age: 25,
        gender: "Nam",
        created_at: "4-5-2021"
    }
]

localStorage.clear();

// listProfile is array, saveData() : save data to localstore
let setList = (listProfile) => {
    let stringData = "";
    listProfile.forEach((value) => {
        stringData += JSON.stringify(value) + "|";
    })
    localStorage.setItem("listProfile", stringData);
}

setList(listProfile);


let getList = () => {
    let stringData = localStorage.getItem("listProfile");
    let stringListProfile = stringData.split("|");
    let listProfile = [];
    stringListProfile.forEach((value) => {
        if (value != "") {
            listProfile.push(JSON.parse(value));
        }
    })
    return listProfile;
}

let removeListHTML = () => {
    let listLi = document.querySelectorAll("li");
    listLi.forEach((value) => {
        value.remove();
    })
}

let deleteList = (index) => {
    let listProfile = getList();
    listProfile.splice(index,1);
    setList(listProfile);
    getListHTML();
}

let getFormAdd = () => {
    document.getElementById("add").style.display = "block";
    document.getElementById("icon_add").style.display = "none";
    document.querySelector("#add form").reset();
    document.getElementById("add_result").textContent = "";
}

let closeFormAdd = () => {
    document.getElementById("add").style.display = "none";
    document.getElementById("icon_add").style.display = "block";
    document.getElementById("add_result").textContent = "";
}

let getDate = () => {
    let stringDate = "";
    let newTime = new Date();
    stringDate += String(newTime.getDate()) + "-" + (Number(newTime.getMonth()) + 1) + "-" + newTime.getFullYear();
    return stringDate;
}

let addList = () => {
    let name = document.getElementById("add_name");
    let age = document.getElementById("add_age");
    let male = document.getElementById("add_male");
    let female = document.getElementById("add_female");
    let result= document.getElementById("add_result");
    console.log(name);
    if (name.value == "" || age.value == ""){
        result.style.color = "red";
        result.textContent = "Cần nhập đủ các trường!";
    }
    else{
        let gender = male.checked ? "Nam" : "Nữ";
        let created_at = getDate();
        let profile = {
            name: name.value,
            age: age.value,
            gender: gender,
            created_at: created_at
        }
        let listProfile = getList();
        listProfile.push(profile);
        setList(listProfile);
        result.style.color = "Green";
        result.textContent = "Thêm thành công!";
        setTimeout(() => {
            getListHTML();
            closeFormAdd();
        }, 500);
    }
}


let getListHTML = () => {
    removeListHTML();
    let listProfile = getList();
    let content = "";
    let index = 0;
    listProfile.forEach((value) => {
        if (value.gender == "Nam") {
            content += `
        <li class="profile_staff">
            <div class="profile_img">
                <i class="fa fa-close" onclick="deleteList(${index})"></i>
                <img src="https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-2.jpg">
            </div><hr>
            <div class="staff_name">${value.name}</div><hr>
            <div class="staff_age">Tuổi: ${value.age}</div><hr>
            <div class="staff_create">Ngày thêm: ${value.created_at}</div>
        </li>`;
        }
        else{
            content += `
        <li class="profile_staff">
            <div class="profile_img">
                <i class="fa fa-close" onclick="deleteList(${index})"></i>
                <img src="https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-3.jpg">
            </div><hr>
            <div class="staff_name">${value.name}</div><hr>
            <div class="staff_age">Tuổi: ${value.age}</div><hr>
            <div class="staff_create">Ngày thêm: ${value.created_at}</div>
        </li>`;
        }
        index++;
    })
    document.getElementById("profile").innerHTML = content;
}

getListHTML();


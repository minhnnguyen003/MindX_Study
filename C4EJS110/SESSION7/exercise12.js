const listItem = ["Backpack", "MiBand watch", "Ring"];
const listUL = document.getElementById("item_list_ul");

//12.1 -> 12.3

function ex12() {
    listUL.insertAdjacentHTML('beforeend', `<li><span>Test Item 1</span></li>`);
    listUL.insertAdjacentHTML('beforeend', `<li><span>Test Item 1</span></li>`);
}

function ex12_1() {
    console.clear();

    //12.1
    console.log(listItem);
    //12.3
    console.log(listUL);
}

12.4

function ex12_4_1() {
    for (let x of listItem) {
        listUL.insertAdjacentHTML('beforeend', `<li><span>${x}</span></li>`);
    }
}


function ex12_4_2() {
    const listLi = document.querySelectorAll("#item_list_ul li");
    for (let i = 0; i < 2; ++i) {
        listLi[i].remove();
    }
}

//12.6

function ex12_6() {
    ex12_4_1();
    ex12_1();
    console.log(document.getElementById("item_input"));
    console.log(document.getElementById("add_btn"));
}

//12.7
const addItem = document.getElementById("add_btn");
const input = document.getElementById("item_input");
function ex12_7() {
    ex12_6();
    addItem.addEventListener('click', () => {
        console.log("Add button clicked");
    });
}
//12.8
let itemInput = "";
function ex12_8() {
    ex12_7();
    input.addEventListener('input', (e) => {
        itemInput = e.target.value;
    });
    addItem.addEventListener('click', () => {
        console.log(itemInput);
    });
}

//12.9
function ex12_9(){
    ex12_8();
    addItem.addEventListener('click', () => {
        listItem.push(itemInput);
        console.log(listItem);
    });
}

//12.10

function ex12_10(){
    ex12_9();
    addItem.addEventListener('click', () => {
        const listUL = document.getElementById("item_list_ul");
        listUL.insertAdjacentHTML('beforeend', `<li><span>${itemInput}</span></li>`);
    });
}

//12.11

function ex12_11(){
    ex12_10();
    console.log(listUL);
    addItem.addEventListener('click', () => {
        document.getElementById("item_input").value = "";
        console.log(listUL);
    });
}

//12.12

function ex12_12() {
    ex12_11();
    const listLi = document.querySelectorAll("#item_list_ul li");
    for (let i = 0; lis = listLi[i]; ++i) {
        lis.insertAdjacentHTML('beforeend', `<button>remove</button>`);
    }
}

//12.13

function ex12_13(){
    ex12_12();
    const listRemove = document.querySelectorAll("#item_list_ul li button");
    for(let i=0; remove = listRemove[i]; ++i){
        remove.addEventListener('click', () => {
            console.log('remove');
        });
    }
}

//12.14

function ex12_14(){
    ex12_13();
    const listRemove = document.querySelectorAll("#item_list_ul li button");
    for(let i=0; remove = listRemove[i]; ++i){
        remove.addEventListener('click', () => {
            console.log(`Iteam: ${i}`);
        });
    }
}

//12_15 

function ex12_15(){
    ex12_14();
    const listRemove = document.querySelectorAll("#item_list_ul li button");
    const listLiSpan = document.querySelectorAll("#item_list_ul li span");
    for(let i=0; remove = listRemove[i]; ++i){
        remove.addEventListener('click', () => {
            let nameItem = listLiSpan[i].textContent;
            listItem.splice(listItem.indexOf(nameItem),1);
            console.log(listItem);
        });
    }
}

//12_16

function ex12_16() {
    ex12_12();
    const listRemove = document.querySelectorAll("#item_list_ul li button");
    const listLi = document.querySelectorAll("#item_list_ul li");
    const listLiSpan = document.querySelectorAll("#item_list_ul li span");
    for(let i=0; remove = listRemove[i]; ++i){
        remove.addEventListener('click', () => {
            let nameItem = listLiSpan[i].textContent;
            listItem.splice(listItem.indexOf(nameItem),1);
            listLi[i].remove();
            console.log(listItem);
        });
    }
}
//4.1

let timeSheetData = [
    {
        Project: "Learn front-end",
        Task: "Learn HTML",
        "Time Spent": 6
    },
    {
        Project: "Learn front-end",
        Task: "Learn CSS",
        "Time Spent": 8
    },
    {
        Project: "Learn front-end",
        Task: "Learn JS Variables and Data Types",
        "Time Spent": 6
    },
    {
        Project: "Learn git",
        Task: "Learn git basics",
        "Time Spent": 2
    }
]

function ex1() {
    console.log(timeSheetData);
}

//5.3

const tbody = document.getElementById("ts_tbody");
function ex3() {
    console.log(tbody);
}

//5.4

function ex4() {
    for (let i in timeSheetData) {
        tbody.insertAdjacentHTML('beforeend', '<tr></tr>')
    }
    const listTr = document.querySelectorAll("#ts_tbody tr");
    for (let i = 1; nodeTr = listTr[i]; ++i) {
        for (let pro in timeSheetData[i - 1]) {
            nodeTr.insertAdjacentHTML('beforeend', `<td>${timeSheetData[i - 1][pro]}</td>`)
        }
    }
}

function ex41() {
    const listTr = document.querySelectorAll("#ts_tbody tr");
    listTr[0].remove();
}

//5.5

//function ex5(){
ex4();
ex41();
//}

//5.6

const inputProject = document.getElementById("project");
const inputTask = document.getElementById("task");
const inputTime = document.getElementById("timespent");
const add = document.getElementById("add_btn");

function ex6() {
    add.addEventListener('click', () => {
        console.log(`${inputProject.value} ${inputTask.value} ${inputTime.value}`);
        timeSheetData.push({
            Project: inputProject.value,
            Task: inputTask.value,
            "Time Spent": inputTime.value
        });
        tbody.insertAdjacentHTML('beforeend', '<tr></tr>');
        const listTr = document.querySelectorAll("#ts_tbody tr");
        let last = timeSheetData.length - 1
        for (let pro in timeSheetData[last]) {
            listTr[last].insertAdjacentHTML('beforeend', `<td>${timeSheetData[last][pro]}</td>`)
        }
        document.getElementById("input").reset();
        console.log(timeSheetData);
    });
}

//5.7

function ex7() {
    const theadTr = document.querySelector("thead tr");
    theadTr.insertAdjacentHTML('beforeend', `<th>Actions</th>`);
    const listTr = document.querySelectorAll("#ts_tbody tr");
    for (let i = 0; nodetr = listTr[i]; ++i) {
        nodetr.insertAdjacentHTML('beforeend', `<td class="actions"><button class="remove" id="remove${i}">x</button></td>`)
    }
}

//5.8

function ex8() {
    let listRemove = document.querySelectorAll(".remove");
    const listTr = document.querySelectorAll("#ts_tbody tr");
    for (let i = 0; nodeMove = listRemove[i]; ++i) {
        nodeMove.addEventListener('click', () => {
            listTr[i].remove();
            let id = listRemove[i].id;
            let index = Number(id.slice(6, id.length));
            console.log(index);
            for (let j = i + 1; j < listRemove.length; ++j) {
                let tmp = Number(listRemove[j].id.slice(6, id.length));
                listRemove[j].id = "remove" + String(tmp - 1);
            }
            timeSheetData.splice(index, 1);
            console.log(timeSheetData);
        });
    }
}


//5.9


function ex9() {
    let listActions = document.getElementsByClassName("actions");
    add.insertAdjacentHTML('afterend', '<button id="update">Update</button><button id="clear">Clear</button>');
    let update = document.getElementById("update");
    update.style.display = "none";
    for (let i = 0; nodeAc = listActions[i]; ++i) {
        nodeAc.insertAdjacentHTML('beforeend', `<button class="buttonU" id="update${i}">U</button>`);
    }
    let listU = document.getElementsByClassName("buttonU");
    for (let i = 0; nodeU = listU[i]; ++i) {
        nodeU.addEventListener('click', () => {
            let id = listU[i].id;
            let index = Number(id.slice(6, id.length));
            inputProject.value = timeSheetData[index].Project;
            inputTask.value = timeSheetData[index].Task;
            inputTime.value = timeSheetData[index]["Time Spent"];
            add.style.display = "none";
            update.style.display = "block";
            update.addEventListener('click', () => {
                timeSheetData[index].Project = inputProject.value;
                timeSheetData[index].Task = inputTask.value;
                timeSheetData[index]["Time Spent"] = inputTime.value;
                let nodeTr = document.querySelectorAll("#ts_tbody tr")[index].childNodes;
                nodeTr[0].textContent = timeSheetData[index].Project;
                nodeTr[1].textContent = timeSheetData[index].Task;
                nodeTr[2].textContent = timeSheetData[index]["Time Spent"];
                setTimeout(() => {
                    document.getElementById("input").reset();
                    add.style.display = "block";
                    update.style.display = "none";
                    console.log(timeSheetData);
                }, 50);
            })
        })
    }
    document.getElementById("clear").addEventListener('click', () => {
        document.getElementById("input").reset();
        add.style.display = "block";
        update.style.display = "none";
    });
}

import { getFullData, style } from "../Helpers.js";

class TaskList extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: "open",
        });
        this._listTask = JSON.parse(this.getAttribute('listTask'));
    }

    observedAttributes() {

    }

    attributeChangedCallback() {

    }

    connectedCallback() {
        let template = "";
        if(this.listTask == null || this.listTask == {}) {
            template = `<p style = "text-align: center;">No task</p>`;
        }
        else {
            let list = "";
            for(let idTask in this.listTask) {
                if(this.listTask[idTask].isDelete) {
                    list = `
                    <li class="list-group-item isDel">
                        <div class="task-info">
                            <div class="task-time">${this.listTask[idTask].hour} : ${this.listTask[idTask].minute} : ${this.listTask[idTask].second}</div>
                            <div>${this.listTask[idTask].date}</div>
                            <div class="task-name" >${this.listTask[idTask].value}</div>
                        </div>
                    </li>` + list;
                }
                else {
                    if(this.listTask[idTask].isComplete) {
                        list = `
                        <li class="list-group-item noDel">
                            <i data-id="${idTask}" class="fas fa-check-circle"></i>
                            <div class="task-info">
                                <div class="task-time">${this.listTask[idTask].hour} : ${this.listTask[idTask].minute} : ${this.listTask[idTask].second}</div>
                                <div>${this.listTask[idTask].date}</div>
                                <div class="task-name">${this.listTask[idTask].value}</div>
                            </div>
                            <i data-id="${idTask}" data-task="${this.listTask[idTask].value}" class="fas fa-trash-alt"></i>
                        </li>` + list;
                    }
                    else {
                        list = `
                        <li class="list-group-item noDel">
                            <i data-id="${idTask}" class="far fa-circle"></i>
                            <div class="task-info">
                                <div class="task-time">${this.listTask[idTask].hour} : ${this.listTask[idTask].minute} : ${this.listTask[idTask].second}</div>
                                <div>${this.listTask[idTask].date}</div>
                                <div class="task-name">${this.listTask[idTask].value}</div>
                            </div>
                            <i data-id="${idTask}" data-task="${this.listTask[idTask].value}" class="fas fa-trash-alt"></i>
                        </li>` + list;
                    }
                }
            }
            template = `
            ${style}
            <ul class="list-group list-group-flush">
                ${list}
                <span></span>
            </ul>`;
        }
        this.shadow.innerHTML = template;

        // process delete
        const listDelete = this.shadow.querySelectorAll('.fa-trash-alt');
        for(let i = 0; i < listDelete.length; ++i) {
            listDelete[i].addEventListener('click', () => {
                document.querySelector('pop-up').style.display = 'block';
                document.querySelector('pop-up').shadow.querySelector('.pop-txt').innerHTML = `Xác nhận xóa task: <br> "${listDelete[i].getAttribute('data-task')}"`;
                localStorage.setItem('delTaskID', listDelete[i].getAttribute('data-id'));
            })
        }

        // process check

        const listCheck = this.shadow.querySelectorAll('.noDel i:first-child');
        for(let i = 0; i < listCheck.length; ++i) {
            listCheck[i].addEventListener('click', () => {
                const listFullData = getFullData();
                const id = listCheck[i].getAttribute('data-id');
                if(listCheck[i].className.includes('fa-check-circle')) {
                    listCheck[i].className = `far fa-circle`;
                    listFullData[id].isComplete = false;
                }
                else {
                    listCheck[i].className = `fas fa-check-circle`;
                    listFullData[id].isComplete = true;
                }
                localStorage.setItem('listTask', JSON.stringify(listFullData));
            })
        }
    }

    get listTask() {
        return this._listTask;
    }

}

window.customElements.define('task-list', TaskList)
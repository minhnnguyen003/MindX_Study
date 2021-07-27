import { getTime, getDate, setTaskID, getDataDay, getFullData, getDataFilter, style } from "../../Helpers.js";

class MainScreen extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: "open",
    });
    this._listTask = getFullData();
  }

  observedAttributes() {}

  attributeChangedCallback() {}

  connectedCallback() {
    const template = `
    ${style}
    <div id="main-screen">
        <form class="main-form">
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="icon-filter"><i class="fas fa-search"></i></span>
                <input type="search" id="filter" class="form-control" placeholder="Enter task name..." autocomplete="off">
            </div>
            <div class="input-group flex-nowrap">
                <input type="text" id="ipNewTask" class="form-control" placeholder="Enter new task..." autocomplete="off">
                <span class="input-group-text" id="addNewTask"><i class="fas fa-arrow-circle-right"></i></span>
            </div>
        </form>
        <div class="resultAdd mt-3 position-absolute" style="right:20px;"></div>
        <div class="main-task-list mt-5">
            <hr>
            <task-list listTask='${JSON.stringify(this._listTask)}'></task-list>
        </div>
    </div>`;
    this.shadow.innerHTML = template;

    const processAddTask = () => {
        const newTask = this.shadow.getElementById('ipNewTask');
        const resultAdd = this.shadow.querySelector('.resultAdd');
        if (newTask.value == "") {
            resultAdd.style.color = 'red';
            resultAdd.textContent = "Hãy nhập dữ liệu của task muốn thêm!";
            setTimeout(() => {
                resultAdd.textContent = "";
            }, 500)
        }
        else {
            resultAdd.style.color = 'green';
            resultAdd.textContent = "Thêm task mới thành công!";
            const taskID = setTaskID();
            if(this._listTask == null) {
                this._listTask = {};
            }
            const time = getTime();
            this._listTask[`${taskID}`] = {date: getDate(), hour: time[0], minute: time[1], second: time[2], value: `${newTask.value}`, isComplete: false, isDelete: false};
            localStorage.setItem('listTask', JSON.stringify(this._listTask));
            const taskList = this.shadow.querySelector('task-list');
            taskList.remove();
            setTimeout(() => {
                this.shadow.querySelector('.main-task-list').insertAdjacentHTML('beforeend', `<task-list listTask='${JSON.stringify(this._listTask)}'></task-list>`);
            }, 100);
            setTimeout(() => {
                newTask.value = "";
                resultAdd.textContent= "";
            }, 500);
        }
    }

    // Add new task
    this.shadow.getElementById('addNewTask').addEventListener('click', processAddTask);

    const processFilter = () => {
        const key = this.shadow.getElementById('filter').value;
        if(key != "") {
            const taskList = this.shadow.querySelector('task-list');
            taskList.remove();
            setTimeout(() => {
                this.shadow.querySelector('.main-task-list').insertAdjacentHTML('beforeend', `<task-list listTask='${getDataFilter(key)}'></task-list>`);
            }, 100);
        }
        else {
            const taskList = this.shadow.querySelector('task-list');
            taskList.remove();
            setTimeout(() => {
                this.shadow.querySelector('.main-task-list').insertAdjacentHTML('beforeend', `<task-list listTask='${JSON.stringify(this._listTask)}'></task-list>`);
            }, 100);
        }
    }

    // Filter
    this.shadow.getElementById('filter').addEventListener('change', processFilter);
  }

  get listTask() {
      return this._listTask;
  }
}

window.customElements.define('main-screen', MainScreen);

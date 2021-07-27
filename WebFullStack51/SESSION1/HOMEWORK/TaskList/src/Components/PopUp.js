import { getFullData, style } from "../Helpers.js";


class PopUp extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: "open",
        });
    }

    connectedCallback() {
        const template = `
        ${style}
        <div id="pop-up">
            <div class="pop-content">
                <i class="far fa-times-circle"></i>
                <h5 class="pop-txt"></h5>
                <div class="pop-btn">
                    <button class="btn-ok btn btn-success button">Đồng ý</button>
                    <button class="btn-later btn btn-secondary button">Để sau</button>
                </div>
            </div>
        </div>`
        this.shadow.innerHTML = template;

        // close
        this.shadow.querySelector('.fa-times-circle').addEventListener('click', () => {
            this.style.display = 'none';
        })

        this.shadow.querySelector('.btn-later').addEventListener('click', () => {
            this.style.display = 'none';
        })

        // process del
        this.shadow.querySelector('.btn-ok').addEventListener('click', () => {
            const listFullData = getFullData();
            listFullData[localStorage.getItem('delTaskID')].isDelete = true;
            localStorage.setItem('listTask', JSON.stringify(listFullData));
            const taskList = document.querySelector('main-screen').shadow.querySelector('task-list');
            taskList.remove();
            setTimeout(() => {
                document.querySelector('pop-up').style.display = 'none';
                document.querySelector('main-screen').shadow.querySelector('.main-task-list').insertAdjacentHTML('beforeend', `<task-list listTask='${JSON.stringify(listFullData)}'></task-list>`);
            }, 100);
        })
    }
}

window.customElements.define('pop-up', PopUp);
import { style } from "../CSS/style.js";
import { newGame } from "./StartGame.js";

class ResultGame extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open',
        });
    }

    static get observedAttributes() { }

    attributeChangedCallback(name, oldValue, newValue) {}

    connectedCallback() {
        const template = `
        ${style}
            <div id="result-game" class="ms-5 border rounded shadow-sm main bg-success text-center">
                <div class="fs-3" id="ok">Bạn đã hoàn thành trò chơi!</div>
                <div class="fs-3" id="timeOut">Hết giờ!</div>
                <div id="result-count-correct" class="fs-3">Số câu đúng <p></p></div>
                <div id="result-score" class="fs-3">Số điểm <p></p></div>
                <div id="play-continue" class="mt-5 pt-5"><button type="button" class="btn btn-danger">Chơi tiếp</button></div>
            </div>
        `
        this.shadow.innerHTML = template;

        if(newGame.timeOut) {
            this.shadow.getElementById('ok').style.display = 'none';
        }
        else{
            this.shadow.getElementById('timeOut').style.display = 'none';
        }

        if(newGame.countCorrect > 0 ){
            this.shadow.querySelector('#result-count-correct p').textContent = `${newGame.countCorrect}/${newGame.sumQuestion}`;
        }
        else{
            this.shadow.querySelector('#result-count-correct p').textContent = `0/${newGame.sumQuestion}`
        }

        if(!newGame.scoreSetting){
            this.shadow.getElementById('result-score').style.visibility = 'hidden';
        }
        else {
            this.shadow.querySelector('#result-score p').textContent = `${newGame.getScore()}`;
        }

        this.shadow.getElementById('play-continue').addEventListener('click', () => {
            router.navigate('/startGame');
        })
    }
}

window.customElements.define('result-game', ResultGame);
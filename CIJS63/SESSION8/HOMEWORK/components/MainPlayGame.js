import { style } from "../CSS/style.js";
import { newGame } from "./StartGame.js";

class MainPlayGame extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open',
        });
    }

    static get observedAttributes() {}

    attributeChangedCallback(name, oldValue, newValue) {}

    connectedCallback() {
        const template = `
        ${style}
            <div id="play-game" class="ms-5 px-5 border rounded shadow-sm main bg-success text-center">
                <div id="play-title" class="d-flex d-flex justify-content-between pt-2">
                    <div class="fs-3" id="play-score"><i class="fa fa-fax"></i>&nbsp;<span></span></div>
                    <div id="count-answer"></div>
                    <div class="fs-3" id="play-time"><i class="fa fa-clock-o"></i>&nbsp;<span></span></div>
                </div>
                <div id="play-question" class="fw-bolder"></div>
                <div id="play-answer" class="d-flex justify-content-center">
                    <button type="button" class="btn btn-warning button" id="yes"><i class="fa fa-check" style="color: white;"></i></button>
                    <button type="button" class="btn btn-danger button" id="no"><i class="fa fa-close"></i></button>
                </div>
                <div id="play-stop" class="mt-5 pt-5"><button type="button" class="btn btn-primary">Thoát trò chơi</button></div>
            </div>`
        this.shadow.innerHTML = template;
        if(!newGame.scoreSetting) {
            this.shadow.getElementById('play-score').style.visibility = 'hidden';
        }
        else{
            this.shadow.querySelector('#play-score span').textContent = newGame.getScore();
        }

        let timeClock;
        if(!newGame.timeSetting) {
            this.shadow.getElementById('play-time').style.visibility = 'hidden';
        }
        else{
            this.shadow.querySelector('#play-time span').textContent = newGame.timeAnswer;
            timeClock =  setInterval(() => {
                newGame.clock();
                this.shadow.querySelector('#play-time span').textContent = newGame.timeAnswer;
                if(newGame.timeAnswer -1 == 0){
                    setTimeout(() => {
                        newGame.outClock();
                        
                        router.navigate('/resultGame');
                        clearInterval(timeClock);
                    }, 1100);
                }
            }, 1000);
        }

        const listQuestion = newGame.listQuestion;
        let index =  0;
        const question = this.shadow.getElementById('play-question');
        const count = this.shadow.getElementById('count-answer');
        question.textContent = listQuestion[index].answer;
        count.textContent = `${index + 1}/${newGame.sumQuestion}`;



        this.shadow.querySelector('#yes').addEventListener('click', () => {
            processGame(index, true);
            index++;
            closeGame(index);
        })

        this.shadow.querySelector('#no').addEventListener('click', () => {
            processGame(index, false);
            index++;
            closeGame(index);
        })

        this.shadow.getElementById('play-stop').addEventListener('click', () => {
            if(newGame.timeSetting) {
                clearInterval(timeClock);
            }
            router.navigate('/startGame');
        })

        function closeGame(index) {
            if(index == newGame.sumQuestion) {
                clearInterval(timeClock);
                router.navigate('/resultGame');
            }
            else { 
                question.textContent = listQuestion[index].answer;
                count.textContent = `${index + 1}/${newGame.sumQuestion}`;
            }
        }

        const processGame = (index, choose) => {
            if(listQuestion[index].result == choose) {
                newGame.correct();
                this.shadow.querySelector('#play-score span').textContent = newGame.getScore();
            }
            else {
                newGame.notCorrect();
                this.shadow.querySelector('#play-score span').textContent = newGame.getScore();
            }
        }
    }
}

window.customElements.define('play-game', MainPlayGame);
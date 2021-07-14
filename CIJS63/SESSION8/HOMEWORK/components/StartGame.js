import { style } from "../CSS/style.js";
import { Game } from "../Game.js";

export let newGame = null;

class StartGame extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open',
        });
    }

    static get observedAttributes() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    connectedCallback() {
        const template = `
        ${style}
            <div id="start" class="ms-5 px-5 py-4 border rounded shadow-sm main bg-success">
                <div>
                    <div class="start-guide">
                        <div class="text-center mb-3 fs-2 fw-bold">Luật chơi</div>
                        <div>
                            <div>- Bạn sẽ phải trả lời 20 câu hỏi tính toán ngẫu nhiên của hệ thống.</div>
                            <div>- Có 3 chế độ chơi:</div>
                            <div class="ps-3">+ Easy: cộng và trừ<br>+ Medium: cộng, trừ, nhân<br>+ Hard: cộng, trừ,
                                nhân, chia.</div>
                            <div>- Chọn score, hệ thống sẽ tính điểm cho bạn. Đúng cộng 10 điểm, Sai trừ 10 điểm.</div>
                            <div>- Chọn time, hệ thống sẽ giới hạn thời gian làm bài của bạn trong 45 giây.</div>
                            <div class="text-center mb-3">Nếu đã rõ , hãy bấm Start để bắt đầu!!!</div>
                        </div>
                    </div>
                    <div class="text-center"><button type="button"
                            class="btn btn-danger fs-2 gap-2 col-6" id="startGame">Start</button></div>
                </div>
            </div>
            <div id="ready-game">
                <div class="ms-5 px-5 border rounded shadow-sm main bg-success text-center ready-game-content">
                    <div class="fs-2">Trò chơi bắt đầu sau...</div>
                    <div class="fs-1" id="readyClock">5</div>
                </div>
            </div>`;
        this.shadow.innerHTML = template;
        this.shadow.getElementById('startGame').addEventListener('click', () => {
            this.shadow.getElementById('start').style.display = 'none';
            this.shadow.getElementById('ready-game').style.display = 'block';
            const scoreSetting = document.querySelector('setting-game').shadowRoot.getElementById('score').checked;
            const timeSetting = document.querySelector('setting-game').shadowRoot.getElementById('time').checked;
            const easy = document.querySelector('setting-game').shadowRoot.getElementById('easy').checked;
            const medium = document.querySelector('setting-game').shadowRoot.getElementById('medium').checked;
            const hard = document.querySelector('setting-game').shadowRoot.getElementById('hard').checked;
            if (easy) {
                newGame = new Game(20, 60, 10, scoreSetting, timeSetting, 'easy');
            }
            else if (medium) {
                newGame = new Game(20, 60, 10, scoreSetting, timeSetting, 'medium');
            }
            else if (hard) {
                newGame = new Game(20, 60, 10, scoreSetting, timeSetting, 'hard');
            }
            const readyTime = setInterval(() => {
                let time = this.shadow.getElementById('readyClock').textContent;
                time = time - 1;
                this.shadow.getElementById('readyClock').textContent = time;
                if (time == 0) {
                    setTimeout(() => {
                        clearInterval(readyTime);
                        router.navigate('/playGame');
                    }, 50);
                }
            }, 1000);
        })
    }
}

window.customElements.define('start-game', StartGame);
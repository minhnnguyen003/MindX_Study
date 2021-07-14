import { style } from "../CSS/style.js";

class SettingGame extends HTMLElement {
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
        <div id="setting" class=" border ps-3 rounded shadow-sm">
            <div class="fs-4"><i class="fa fa-cogs"></i>  Setting</div>
            <form>
                <div class="setting-choose">
                    <div class="form-check form-switch">
                        <label class="form-check-label" for="score">Score</label>
                        <input class="form-check-input" type="checkbox" id="score">
                    </div>
                    <div class="form-check form-switch">
                        <label class="form-check-label" for="time">Time</label>
                        <input class="form-check-input" type="checkbox" id="time">
                    </div>
                </div>
                <div class="setting-mode">
                    <div class="fs-4">Mode:</div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="easy" value="easy" checked>
                        <label class="form-check-label" for="easy">Easy</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="medium" value="medium">
                        <label class="form-check-label" for="medium">Medium</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="hard" value="hard">
                        <label class="form-check-label" for="hard">Hard</label>
                    </div>
                </div>
            </form>
        </div>`;
        this.shadow.innerHTML = template;
        this.shadow.getElementById('easy').addEventListener('click', () => {
            console.log(this.shadow.getElementById('easy').checked);
        })
    }
}

window.customElements.define('setting-game', SettingGame);
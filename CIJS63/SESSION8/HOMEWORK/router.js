const root = null;
const useHash = true; // Defaults to: false
const hash = "#"; // Defaults to: '#'
window.router = new Navigo(root, useHash, hash);

const $app = document.getElementById('app');

window.router.on('/startGame', () => {
    $app.innerHTML = `
    <setting-game></setting-game>
    <div id="main">
        <start-game></start-game>
    </div>`;
}).resolve();

window.router.on('/playGame', () => {
    $app.innerHTML = `<play-game></play-game>`;
}).resolve();

window.router.on('/resultGame', () => {
    $app.innerHTML = `<result-game></result-game>`;
}).resolve();
const root = null;
const useHash = true; // Defaults to: false
const hash = "#"; // Defaults to: '#'
window.router = new Navigo(root, useHash, hash);

let $app = document.getElementById("app");

window.router
  .on("/login", function () {
    $app.innerHTML = "<custom-login></custom-login>";
  })
  .resolve();

window.router
  .on("/signup", function () {
    $app.innerHTML = "<custom-signup></custom-signup>";
  })
  .resolve();

window.router
  .on("/main", function () {
    $app.innerHTML = `<main-screen></main-screen>`;
  })
  .resolve();
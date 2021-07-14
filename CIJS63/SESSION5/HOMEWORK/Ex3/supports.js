// open form add

document.getElementById("icon_add").addEventListener("click", () => {
    document.querySelector("custom-add").style.display = "block";
    document.querySelector("custom-add").shadowRoot.querySelector("#add form").reset();
    document.querySelector("custom-add").shadowRoot.getElementById("add_result").textContent = "";
})

// logout 

document.getElementById("icon_logout").addEventListener("click", () => {
    document.getElementById("employee").style.display = "none";
    document.querySelector("custom-login").style.display = "block";
})
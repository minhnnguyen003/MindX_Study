const style = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">    
`

class RefisterForm extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open',
        })
    }

    static get observedAttributes(){
    }

    attributeChangedCallback(){}

    connectedCallback() {
        const template = `
        ${style}
    <form>
        <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password">
        </div>
        <button class="btn btn-primary" id='submit'>Submit</button>
    </form>`;
        this.shadow.innerHTML = template;

        this.shadow.getElementById('submit').addEventListener('click', () => {
            const email = this.shadow.getElementById('email').value;
            const password = this.shadow.getElementById('password').value;
            firebase.firestore().collection('users').add({email, password});
        })
    }
}

window.customElements.define('register-form', RefisterForm);


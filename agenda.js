let nomeInput = document.querySelector('#nome');
let emailInput = document.querySelector('#email');
let telefoneInput = document.querySelector('#telefone');
let contactListUl = document.querySelector('.contactList ul');

let registar = document.querySelector('#registar').addEventListener('click', registo);

function registo() {
    if (isNaN(parseInt(telefoneInput.value))) {
        return alert('Apenas números são permitidos no campo de telefone.')
    }
    let newContact = new Contact(nomeInput.value, emailInput.value, telefoneInput.value);
    console.log(newContact);
    let newContactToLi = `<li>${newContact.write()}</li>`;

    contactListUl.innerHTML = contactListUl.innerHTML + newContactToLi;

    clearFields();
}

class Contact {
    constructor(nome, email, telefone) {
        this.nome = nomeInput.value;
        this.email = emailInput.value;
        this.telefone = telefoneInput.value;
    }

    write = function () {
        let newContactToLi = `<h3>Nome: ${this.nome}</h3>
            <p>Email: ${this.email}</p>
            <p>Telefone: ${this.telefone}</p>`;
        return newContactToLi;
    };
}

function clearFields() {
    nome.value = '';
    email.value = '';
    telefone.value = '';
}

const form = document.getElementById("form");
const username = document.getElementById("username");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const numero = document.getElementById("numero");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
    
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

sobrenome.addEventListener("blur", () => {
    checkInputSobrenome();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

numero.addEventListener("blur", () => {
    checkInputNumero();
})




/* FUNÇÕES VERIFICANDO SE A ERROS PELO FORMULÁRIO */

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Digite seu nome!")
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Digite seu email!")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputNumero(){
    const numeroValue = numero.value;

    if(numeroValue === ""){
        errorInput(numero, "Digite seu numero de celular!")
    } else if (numeroValue.length < 9){
        errorInput(numero, "O numero de celular precisa conter no mínimo 9 caracteres!")
    } else {
        const formItem = numero.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputSobrenome(){
    const sobrenomeValue = sobrenome.value;

    if(sobrenomeValue === ""){
        errorInput(sobrenome, "Digite seu sobrenome!")
    } else {
        const formItem = sobrenome.parentElement;
        formItem.className = "form-content"
    }
}


function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputSobrenome();
    checkInputNumero();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
    });

    if(isValid){
        alert("DADOS ENVIADO COM SUCESSO, ENTRAREMOS EM CONTATO!")
    } else {
        alert("Preencha todos os campos corretamente!")
    }
}

/* Função exibir Error */
function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"

}

    function abrirWhatsapp() {
      var nome = document.getElementById("nome").value;
      var telefone = document.getElementById("telefone").value;
      var email = document.getElementById("email").value;
      var msg = document.getElementById("msg").value;
      var url = "https://wa.me/552126957062?text="
        + "*Formulário de Contato*" + "%0a" 
        + "%0a"  
        + "*Nome*: " + nome + "%0a" 
        + "*Telefone*: " + telefone + "%0a"
        + "*E-mail*: " + email + "%0a"
        + "*Mensagem*: " + msg;
      window.open(url, '_blank').focus();
    }
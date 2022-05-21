// ----------------------------------------------------

const inputNome = document.getElementById('input-nome')
const inputSobrenome = document.getElementById('input-sobrenome')
const inputEmail = document.getElementById('input-email')
const inputSenha = document.getElementById('input-senha')
const inputAniver = document.getElementById('input-aniver')
const inputCpf = document.getElementById('input-cpf')

// ----------------------------------------------------

const labelNome = document.getElementById('label-nome')

// ----------------------------------------------------

const msgError = document.querySelector('.msgError')

// ----------------------------------------------------



// ------------------- VALIDAÇÕES DE CAMPOS VAZIOS ----

inputNome.onblur = function(){
    if(inputNome.value == ""){
        inputNome.classList.add('invalido')
        inputNome.innerHTML += msgError
        msgError.style.display= "block"
    } else {
        inputNome.classList.remove('invalido')
    }
}

inputEmail.onblur = function(){
    if(inputNome.value == ""){
        inputEmail.classList.add('invalido')
    } else {
        inputEmail.classList.remove('invalido')
    }
}

inputAniver.onblur = function(){
    if(inputAniver.value == ""){
        inputAniver.classList.add('invalido')
    } else {
        inputAniver.classList.remove('invalido')
    }
}

inputSobrenome.onblur = function(){
    if(inputSobrenome.value == ""){
        inputSobrenome.classList.add('invalido')
    } else {
        inputSobrenome.classList.remove('invalido')
    }
}

inputSenha.onblur = function(){
    if(inputSenha.value == ""){
        inputSenha.classList.add('invalido')
    } else {
        inputSenha.classList.remove('invalido')
    }
}

// inputSenha.onkeyup = function(){
//     if(inputSenha.length >= 3){
//         inputSenha.classList.add("senhaFraca")
//     } else if (inputSenha.length == 4 || inputCpf.length == 5){
//         inputSenha.classList.add("senhaMedia")
//     } else if (inputSenha.length <= 6) {
//         inputSenha.classList.add("senhaForte")
//     } }

inputCpf.onblur = function(){
    if(inputCpf.value == ""){
        inputCpf.classList.add('invalido')
    } else {
        inputCpf.classList.remove('invalido')
    }
}

// ----------------------------------------------------

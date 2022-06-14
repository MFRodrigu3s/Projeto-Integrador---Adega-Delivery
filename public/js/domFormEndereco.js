let areaDinamica = document.getElementById("area-dinamica")
let inputRua = document.getElementById("input-rua")
let inputNumero = document.getElementById("input-numero")

function texto1(){
    if (inputRua.value == "" || inputNumero.value == "") {
        alert("preencha os campos")
    } else {
        areaDinamica.innerHTML = `<div id="div-texto">
            <p id="titulo2" class="textoInfo">Registrado!</p>
            <p class="textoInfo">Assim que o pagamento for confirmado,</p>
            <p class="textoInfo">iremos preparar o pedido para envia-lo.</p>
        </div>`
    }
}

function texto2() {
    if (inputRua.value == "" || inputNumero.value == "") {
        alert("preencha os campos")
    } else {
        areaDinamica.innerHTML = `<div id="div-texto">
            <p id="titulo2" class="textoInfo">Registrado!</p>
            <p class="textoInfo">Logo mais seu pedido irá ser enviado ate você.</p>
            <p class="textoInfo">Agradecemos a preferência por nossa loja! Tenha um bom dia</p>
        </div>`
    }
}
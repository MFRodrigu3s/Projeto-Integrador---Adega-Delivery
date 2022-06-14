let botaoPix = document.getElementById("botao-pix")
let sectionContainer = document.getElementById("container")

function pix() {
    if(document.getElementById("div-qrcode")){
        document.getElementById("div-qrcode").remove()
    } else {
        sectionContainer.innerHTML += `<div id="div-qrcode">
            <h2>PIX - QR Code</h2>
            <img src="/images/estilos/qrCode.jpg" id="qrcode-img" alt="">
            <a href="/aprovandoPag"><button id="botao-comprar" onclick="apagar()">Pagamento Realizado</button></a>
        </div>`
    }
}

function apagar() {
    localStorage.clear()
}
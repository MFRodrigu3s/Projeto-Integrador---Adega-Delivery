let botaoPix = document.getElementById("botao-pix")
let sectionContainer = document.getElementById("container")

function pix() {
    if(document.getElementById("div-qrcode")){
        document.getElementById("div-qrcode").remove()
    } else {
        sectionContainer.innerHTML += `<div id="div-qrcode">
            <h2>PIX - QR Code</h2>
            <img src="../public/images/estilos/qrCode.jpg" id="qrcode-img" alt="">
            <a href="../../views/aguardando.html"><button id="botao-comprar" href='/google.com'>Pagamento Realizado</button></a>
        </div>`
    }
}
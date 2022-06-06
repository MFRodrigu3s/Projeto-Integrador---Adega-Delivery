function getCarrinho() {

    let nome = localStorage.getItem("produto")
    console.log(nome)
    let div = document.getElementById("area-produtos")
    let divTeste = document.getElementById("teste")

    for (let i = 1; i <= 99; i++) {

        let nome = localStorage.getItem("produto" + i)
        let quantidade = localStorage.getItem("qntdProd" + i)
        let valorTdP = localStorage.getItem("valorTdP" + i)
        let foto = localStorage.getItem("foto" + i)

        console.log(nome, quantidade, valorTdP)

        if (nome) {
            div.innerHTML += 
            `<div class="produto-und">
            <img class="foto" src=${foto} alt="${nome}"></img>
            <p class="informacao" id="${i}">${nome}</p>
            <p class="informacao">${quantidade}und</p>
            <p class="informacao">R$ ${valorTdP}</p>
            <a href="#" class="btn-excluir" onclick="deletarItem(${i})">X</a>
            </div>`
        }
        
    }

}

function deletarItem(id) {
    localStorage.removeItem("produto"+id)
    localStorage.removeItem("qntdProd" + id)
    localStorage.removeItem("valorTdP" + id)
    localStorage.removeItem("foto" + id)
}

function limparCarrinho(){

    let div = document.getElementById("area-produtos")
    localStorage.clear()
    div.innerHTML = `<div class="produto-und"><h1>Seu Carrinho está vazio!</h1></div>`

}

getCarrinho()
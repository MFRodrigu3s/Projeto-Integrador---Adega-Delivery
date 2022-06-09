function getCarrinho() {

    let divCarrinhoVazio = document.getElementById("carrinho-vazio")
    let div = document.getElementById("area-produtos")

    if(localStorage.length !== 0){
        divCarrinhoVazio.remove()
    }
    
    for (let i = 1; i <= 99; i++) {

        let nome = localStorage.getItem("produto" + i)
        let quantidade = localStorage.getItem("qntdProd" + i)
        let valorTdP = localStorage.getItem("valorTdP" + i)
        let foto = localStorage.getItem("foto" + i)

        if (nome) {
            div.innerHTML += 
            `<div id="${i}" class="produto-und">
            <img class="foto" src=${foto} alt="${nome}"></img>
            <p class="informacao">${nome}</p>
            <p class="informacao">${quantidade}und</p>
            <p class="informacao">R$ ${valorTdP}</p>
            <p class="btn-excluir" onclick="deletarItem(${i})"><b>X</b></p>
            </div>`
        }
        
    }

}

function deletarItem(id) {

    let produtoUnd = document.getElementById(id)

    localStorage.removeItem("produto"+id)
    localStorage.removeItem("qntdProd" + id)
    localStorage.removeItem("valorTdP" + id)
    localStorage.removeItem("foto" + id)

    produtoUnd.remove()

}

function limparCarrinho(){

    let div = document.getElementById("area-produtos")
    localStorage.clear()
    div.innerHTML = `<div class="produto-und"><h1>Seu Carrinho está vazio!</h1></div>`

}

getCarrinho()

// toastfy
// https://apvarun.github.io/toastify-js/
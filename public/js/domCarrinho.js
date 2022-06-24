let div = document.getElementById("area-produtos")

function getCarrinho() {

    let divCarrinhoVazio = document.getElementById("carrinho-vazio")

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
                <div>
                    <img class="foto" src=${foto} alt="${nome}"></img>
                </div>
                <div class="div-infos"> 
                    <p class="informacao">${nome}</p>
                    <p class="informacao">${quantidade}und</p>
                    <p class="informacao">R$ ${valorTdP}</p>
                </div>
                <p class="btn-excluir" onclick="deletarItem(${i})"><b>X</b></p> 
            </div>`
        }
        
    }

}

function deletarItem(id) {

    let produtoUnd = document.getElementById(id)

    if(localStorage.length > 4) {
        
        localStorage.removeItem("produto"+id)
        localStorage.removeItem("qntdProd" + id)
        localStorage.removeItem("valorTdP" + id)
        localStorage.removeItem("foto" + id)

        produtoUnd.remove()

    } else if (localStorage.length <= 4) {

        localStorage.removeItem("produto"+id)
        localStorage.removeItem("qntdProd" + id)
        localStorage.removeItem("valorTdP" + id)
        localStorage.removeItem("foto" + id)

        produtoUnd.remove()

        div.innerHTML += `<div id="carrinho-vazio" class="produto-und"><p>Seu Carrinho está vazio!</p></div>`

    }
    
}

function limparCarrinho(){
    if(localStorage.length > 0){
        localStorage.clear()
        div.innerHTML = `<div id="carrinho-vazio" class="produto-und"><p>Seu Carrinho está vazio!</p></div>`
    } else {
        alert("o carrinho já está vazio!")
    }
}

getCarrinho()
// toastfy
// https://apvarun.github.io/toastify-js/
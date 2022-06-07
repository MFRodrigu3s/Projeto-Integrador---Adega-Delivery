function getCarrinho() {

    let divTeste = document.getElementById("teste")
    let div = document.getElementById("area-produtos")

    if(localStorage.length !== 0){
        divTeste.remove()
    }
    console.log(localStorage.length)

    let nome = localStorage.getItem("produto")
    

    for (let i = 1; i <= 99; i++) {

        let nome = localStorage.getItem("produto" + i)
        let quantidade = localStorage.getItem("qntdProd" + i)
        let valorTdP = localStorage.getItem("valorTdP" + i)
        let foto = localStorage.getItem("foto" + i)

        console.log(nome, quantidade, valorTdP)

        if (nome) {
            div.innerHTML += 
            `<div id="${i}" class="produto-und">
            <img class="foto" src=${foto} alt="${nome}"></img>
            <p class="informacao">${nome}</p>
            <p class="informacao">${quantidade}und</p>
            <p class="informacao">R$ ${valorTdP}</p>
            <a href="#" class="btn-excluir" onclick="deletarItem(${i})">X</a>
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
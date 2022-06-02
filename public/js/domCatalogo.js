function AddCarrinho(nome, valor, quantidade){
    localStorage.setItem("nome", nome)
    localStorage.setItem("qntd", quantidade)
    const valorTdP = valor * quantidade
    localStorage.setItem('valorTdP', valorTdP)
    alert('Produto adicionado ao carrinho!')
}
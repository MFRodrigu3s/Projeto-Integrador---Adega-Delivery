function AddCarrinho(nome, valor, quantidade){
    localStorage.setItem(nome, quantidade+'un')
    const valorTdP = valor * quantidade
    localStorage.setItem(valor, valorTdP)
    alert('Produto adicionado ao carrinho!')
}
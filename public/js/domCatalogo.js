function AddCarrinho(id, nome, valor, quantidade){
    localStorage.setItem("produto"+id, nome)
    localStorage.setItem("qntdProd"+id, quantidade)
    const valorTdP = valor * quantidade
    localStorage.setItem('valorTdP'+id, valorTdP)
    alert('Produto adicionado ao carrinho!')
}
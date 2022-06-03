function AddCarrinho(foto, id, nome, valor, quantidade){
    localStorage.setItem("produto"+id, nome)
    localStorage.setItem("qntdProd"+id, quantidade)
    const valorTdP = valor * quantidade
    localStorage.setItem('valorTdP'+id, valorTdP)
    localStorage.setItem('foto'+id, foto)
    alert('Produto adicionado ao carrinho!')
}
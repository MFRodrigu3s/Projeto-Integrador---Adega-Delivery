function getCarrinho() {
    let nome = localStorage.getItem("nome")
    let quanditade = localStorage.getItem("qntd")
    let valorTdP = localStorage.getItem("valorTdP")
    console.log(nome, quanditade, valorTdP)
}
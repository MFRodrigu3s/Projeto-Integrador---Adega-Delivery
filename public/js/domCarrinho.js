function getCarrinho() {

    for(let i = 1; i<=99; i++){

        let nome = localStorage.getItem("produto" + i)
        let quanditade = localStorage.getItem("qntdProd" + i)
        let valorTdP = localStorage.getItem("valorTdP" + i)

            console.log(nome, quanditade, valorTdP)

    }
    
}
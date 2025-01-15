let distribuidora: Array<{estado: string, valor: number}> = [
    {
        estado: "SP",
        valor: 67836.43
    },
    {
        estado: "RJ",
        valor: 36678.66
    },
    {
        estado: "RJ",
        valor: 36678.66
    },
    {
        estado: "MJ",
        valor: 29229.88
    },
    {
        estado: "ES",
        valor: 27165.48
    },
    {
        estado: "Outros",
        valor: 19849.53
    }
]

let total_fatuarmento_distribuidora: number = 0;


distribuidora.forEach((element) => {
    total_fatuarmento_distribuidora += element.valor;
})

distribuidora.forEach(element => {
    const pocentagem = (element.valor/total_fatuarmento_distribuidora)*100
    console.log(`${element.estado} - ${pocentagem.toFixed(2)}%`)
})
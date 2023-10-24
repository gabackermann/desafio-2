// a opcional sempre deve ser o parametro final (EX: VALOR DO PAO   )

function torrar(pao, nome = "Cliente", valor) {
    console.log("Torrada Feita com " + pao)
    console.log("Ela é um pedido do(a)  " + nome)
    console.log("O valor total é: " + valor)
}

torrar("pão de forma")
torrar("pão integral", "Nadine", 10.90)
 

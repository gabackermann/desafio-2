historico(100, 0)
function historico(vitoria, derrota) {
    return saldoVitorias = vitoria - derrota
   
}

if (saldoVitorias <= 10) {    
    console.log("O jogador tem o saldo de " + saldoVitorias + " e está no elo Ferro")
} else if (saldoVitorias <= 20) {
    console.log("O jogador tem o saldo de " + saldoVitorias + " e está no elo Bronze")
} else if (saldoVitorias <= 50) {
    console.log("O jogador tem o saldo de " + saldoVitorias + " e está no elo Prata")    
} else if (saldoVitorias <= 80) {
    console.log("O jogador tem o saldo de " + saldoVitorias + " e está no elo Ouro")    
} else if (saldoVitorias <= 90) {
    console.log("O jogador tem o saldo de " + saldoVitorias + " e está no elo Diamante")    
} else if (saldoVitorias <= 100) {
    console.log("O jogador tem o saldo de " + saldoVitorias + " e está no elo Lendário")    
} else if (saldoVitorias >= 101) {
    console.log("O jogador tem o saldo de " + saldoVitorias + " e está no elo Imortal")    
}
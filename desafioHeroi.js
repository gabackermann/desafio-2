class hero{
    constructor(nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe
        
    }
    ataque(tipoDeAtaque){
        console.log (`Atacaou usando ${tipoDeAtaque}`)
       }
}


let personagem = new hero ("Gabriel", 24, "Monge")

if (personagem.classe === "Mago") {
    let tipoDeAtaque = "Bola de fogo"
    console.log(`O ${personagem.classe} atacou com ${tipoDeAtaque}`)
}
else if (personagem.classe === "Guerreiro") {
    let tipoDeAtaque = "Ataque Giratorio"
    console.log(`O ${personagem.classe} atacou com ${tipoDeAtaque}`)
}else if (personagem.classe === "Monge") {
    let tipoDeAtaque = "Palma Budista"
    console.log(`O ${personagem.classe} atacou com ${tipoDeAtaque}`)
}else if (personagem.classe === "Ninja") {
    let tipoDeAtaque = "Rasengan"
    console.log(`O ${personagem.classe} atacou com ${tipoDeAtaque}`)
}else {
    console.log("Por favor escolha uma classe disponivel (Mago, Guerreiro, Monge, Ninja)")
}


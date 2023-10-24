let resultado = soma (5,10)

function soma (numA, numB){ 
   return numA + numB 
}

console.log("O resultado dessa função é " + resultado)
// função só pode retornar um valor ou um objeto
let username = getFirstName("Gabriel Ackermann de Vasconcelos Suslik")
console.log("Seja bem vindo: " + username)
 function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
 }
let invoice = {
    name: "Gabriel", 
    age: 32,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecanico", 129.99],
        2: ["Monitor", 899.99],
        3: ["Tv 100 polegadas", 1000.90 ]
    },
    
}

generateInvoice(invoice)

function generateInvoice(invoice) {
   console.log(`O comprador é: ${invoice.name}`)
   console.log(`A idade é: ${invoice.age}`)
   console.log("-------------------------------")

   for(let  i in invoice.products){
        let [productName, productPrice] = invoice.products [i]
        console.log(`${productName}: R$ ${productPrice}`)
   }
   
}
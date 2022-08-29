let nome 
let idade 

console.log(typeof(nome))
console.log(typeof(idade))

// foi impresso o tipo "undefined" por que não foi dado valor algum à let.

const nomePrompt = prompt("qual é o seu nome?")
console.log(nomePrompt)

const idadePrompt = prompt("quantos anos você tem?")
console.log(idadePrompt)

console.log(typeof(nomePrompt))
console.log(typeof(idadePrompt))

// mesmo com a variavel idadePrompt sendo um numero, foi reconhecida como string. Talvez por ter sido escrita pelo usuario.

console.log("Olá", (nomePrompt),"você tem", (idadePrompt), "anos!" )
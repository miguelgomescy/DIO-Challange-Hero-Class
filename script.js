/*
Apresentar os heróis e depois o restante

Entrada 
Processamento
Saida

apresentar os personagens*/
console.log("Ola nobre jovem guerreiro, ou donzela guerreira!\nBem vindo ao fantástico munda da Lógica de Programação com JavaScript \n Veja a seguir os personagens que estão contigo nesta:")
console.log("")
console.log(".")
console.log("")

class hero{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
        
    }

    atacar(){
        console.log(`O ${this.tipo}, ${this.nome} atacou: ${this.ataque}`)
    }

    apresentar (){
        console.log(`Conheça ${this.nome}, um ${this.tipo}, de ${this.idade} `)

    }

}

let mago = new hero("Bruxo Ronaldinho", "30 anos", "Mago", "Usou sua magia do drible")        //usou magia
let guerreiro = new hero("Myamoto Musashi", "25 anos", "Guerreiro-Samurai",
 "Usou sua katana afiada") // usou espada
let monge = new hero ("Jesus", "33 anos", "Monge da Galileia",
"Usou sua sabedoria divína e te trouxe paz" ) //usou artes marciais
let ninja = new hero ("Bruce Lee", "30 anos",  "Ninja", "Lançou 5 shurikens") // usou shuriken



mago.apresentar()
console.log("")
guerreiro.apresentar()
console.log("")
monge.apresentar()
console.log("")
ninja.apresentar()
console.log(".")

console.log("")
console.log(".")
console.log("Veja os personagens em seu modo batalha!")
console.log("")
console.log(".")
console.log("")

mago.atacar()
console.log("")
guerreiro.atacar()
console.log("")
monge.atacar()
console.log("")
ninja.atacar()

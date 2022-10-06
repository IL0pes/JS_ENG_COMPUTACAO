//Exercício 1
console.log ("\nExercicio 1")
const x = 22
const y = 12
if(x>y){
    console.log('O numero ' + x + ' é maior que ' + y + '.')
}
else{
    console.log('O numero ' + y + ' é maior que ' + x + '.')
}

//Exercício 2
console.log ("\nExercicio 2")
const ano = 2000
if(ano<2006 && ano>1900){
    console.log('Você pode votar este ano.')
}
else{
    console.log('Você não poderá votar este ano.')
}


//Exercício 3
console.log ("\nExercicio 3")
const input = 1234
if (input == 1234){
    console.log("A senha é valida! ")
    }
else{
    console.log("A senha é inválida!")}

//Exercício 4
console.log ("\nExercicio 4")
const qntmacas = 10
let price
if (qntmacas >= 12){
    price = 0.25
}
else{
    price = 0.30
}
console.log("O valor total da compra é de R$" + qntmacas * price)

//Exercício 5
console.log ("\nExercicio 5")
const a = 40
const b = 20
const c = 2
let first, second, third
if(a > b & b > c){
    first = a
    second = b
    third = c
}
else if(a > c & c > b){
    first = a
    second = c
    third = b
}
else if(b > a & a > c){
    first = b
    second = a
    third = c
}
else if(b > c & c > a){
    first = b
    second = c
    third = a
}
else if(c > a & a > b){
    first = c
    second = a
    third = b
}
else if(c > b & b > a){
    first = c
    second = b
    third = a
}
console.log(first +'\n'+second+'\n'+third)

//Exercício 6
console.log ("\nExercicio 6")
//Feminino : 1 -- Masculino : 2
const sexo = 1
const altura = 1.70
let peso
switch (sexo){
    case 1:
        peso = (62.1 * altura)-44.7
    break
    case 2:
        peso = (72.7 * altura)-58
    break

}
console.log('Seu peso ideal é '+peso.toFixed(2)+'KG.' )

//Exercício 7&8
console.log ("\nExercicio 7&8")
const lados = 4
const size = 15
if (lados == 3 || lados == 4 || lados == 5){
    let area
    switch(lados){
        case 3:
            area = (size*size)/2
            console.log('A área do triângulo é = ' + area + 'cm².')
            break
    
        case 4:
            area = (size*size)
            console.log('A área do quadrado é = ' + area + 'cm².')
            break
    
        case 5:
            console.log('Um polígono de 5 lados se chama Pentágono.')
            break
    }
}
else if (lados > 5){
    console.log('Polígono não identificado.')
}
else {console.log('Não é um polígono.')}

//Exercício 9
console.log ("\nExercicio 9")
const p = 4
const z = 23
const e = 143
if (p > z & p > e){
    console.log('O número '+ p + ' é maior que '+z+' e '+e+'.')
}
else if(z > p & z > e){
    console.log('O número '+ z + ' é maior que '+p+' e '+e+'.')
}
else if(e > z & e > p){
    console.log('O número '+ e + ' é maior que '+p+' e '+z+'.')
}

//Exercício 10
console.log ("\nExercicio 10")
const lado1 = 4
const lado2 = 3
const lado3 = 4
if(lado1 == lado2 & lado1 == lado3){
    console.log('É um triângulo equilátero')
}
else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log('É um triângulo isócele')
}
else if(lado1 != lado2 & lado1 != lado3 & lado2 != lado3){
    console.log('É um triângulo escaleno')
}
else{console.log('Não é um triângulo.')}

//Exercício 11
console.log ("\nExercicio 11")
const ladoA = 5
const ladoB = 45
const ladoC = 45
if(ladoA == 90 && ladoA != ladoB && ladoA != ladoC && ladoB != ladoC || ladoB == 90 && ladoA != ladoB && ladoA != ladoC && ladoB != ladoC || ladoC == 90 && ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
    console.log('É um triângulo Retângulo')
}
else if(ladoA > 90 || ladoB > 90 || ladoC > 90){
    console.log('É um triângulo Obtusângulo')
}
else if(ladoA < 90 & ladoB < 90 & ladoC < 90){
    console.log('É um triângulo escaleno')
}
else{console.log('Não é um triângulo.')}



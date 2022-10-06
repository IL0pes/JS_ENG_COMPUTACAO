//Exercício 1
console.log ("\nExercicio 1")
let nome = "isaac"
let age = 1222
let salary = 1080
let sex = "M"
let estadoCivil = 'Solteiro'
if (nome.length <= 3){
    console.log('*Nome deve conter mais de 3 letras.')
}
else if (nome.length > 3){
    console.log('Nome: '+nome )
}
if (age < 0 || age > 150){
    console.log('*Idade deve ser entre 0 e 150 anos.')
}
else if (age > 0 || age < 150){
    console.log('Idade: '+age)
}
if (salary < 0){
    console.log('*Salário deve ser maior que zero.')
}
else if (salary > 0){
    console.log('Salário: '+salary)
}
switch (sex){
    case 'F':
        console.log('Sexo: '+sex)
        break
    
    case 'M':
        console.log('Sexo: '+sex)
        break
    
    default:
        console.log("*Sexo deve ser F ou M.")
        break           
}
switch (estadoCivil){
    case 'Solteiro':
        console.log('Estato civil: '+estadoCivil)
        break
    
    case 'Casado':
        console.log('Estato civil: '+estadoCivil)
        break

    case 'Divorciado':
        console.log('Estato civil: '+estadoCivil)
            break

    case 'Viuvo':
        console.log('Estato civil: '+estadoCivil)
        break

    default:
        console.log("*Estado civil inválido.")
        break           
}

//Exercício 2
console.log ("\nExercicio 2")
let countryA = 80000
let countryB = 200000
let years = 0
do {
    countryA = countryA * 0.03 + countryA
    countryB = countryB * 0.015 + countryB
    years = years + 1
}
while (countryA <= countryB)
console.log('São necessários '+years+ ' anos.')

//Exercício 3
console.log ("\nExercicio 3")
let paisA = 200000
let paisB = 2000000
let porcentagemA = 0.1
let porcentagemB = 0.05
let anos = 0
if (paisA < paisB){
    do {
        paisA = paisA * porcentagemA + paisA
        paisB = paisB * porcentagemB + paisB
        anos = anos + 1
    }
    while (paisA <= paisB)
    console.log('São necessários '+anos+ ' anos.')
}
else {console.log("País A já é mais populoso que País B.")}  

//Exercício 4
console.log ("\nExercicio 4")
let number = 0
while (number < 20){
    number = number + 1
    console.log(number)
}
let x = [...Array(21).keys()]
console.log(x)

//Exercício 5
console.log ("\nExercicio 5")
const numbers = [21,312,2,12,54]
numbers.sort(function(a, b){return a - b});
console.log(numbers[4])

//Exercício 6
console.log ("\nExercicio 6")
let a = [123,364,37,54,1]
let soma = 0
for (let i = 0; i < a.length; i++) {
    soma += a[i];
}
console.log("Soma = "+soma+'\nMédia = '+soma/5)

//Exercício 7
console.log ("\nExercicio 7")
for (var odd = 0; odd < 51; odd++) {
    if ((odd % 2) != 0) {
        console.log(odd);
    }
}

//Exercício 8
console.log ("\nExercicio 8")
let z = 23
const y = 45
while (z < y -1) {
    z += 1
    console.log(z) 
}

//Exercício 9
console.log ("\nExercicio 9")
let h = 23
const j = 45
let t = 0
let array = []
while (h < j -1) {
    h += 1
    t += 1
    array.splice(t,0,h)    
}
let sum = 0
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum)

//Exercício 10
console.log ("\nExercicio 10")
let value = 0
let m = 2
console.log('\nTabuada do '+m+':')
while (value < 10){
    value += 1
    console.log(m+' * '+value + ' = ' + (m*value))
}

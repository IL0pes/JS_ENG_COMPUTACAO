//Exercício 1
console.log ("Exercicio 1")
var NAME = "Isaac Lopes"
const DOB = "12/12/1999"
let AGE = 22
console.log ("Nome:  " + NAME)
console.log ("DNasc: " + DOB)
console.log ("Idade: " + AGE)

//Exercício 2
console.log ("\nExercicio 2")
let number = 64
console.log ("Raiz Quadrada de " + number + " = " + Math.sqrt(number)) 

//Exercício 3
console.log ("\nExercicio 3")
let a = 12
console.log (a + " elevado ao quadrado é igual a " + a * a) 

//Exercício 4
console.log ("\nExercicio 4")
function quadrado(){
    let a = 23
    let b = 12
    console.log("A hipotenusa do triangulo é = " + Math.hypot(a,b))
}
quadrado()

//Exercício 5
console.log ("\nExercicio 5")
function baskara(){
    let a = 2
    let b = 7
    let c = 5
    let delta = Math.sqrt((b*b)-4*a*c)
    let x1 = ((-b) + delta / (2 * a))
    let x2 = ((-b) - delta / (2 * a))
    if (!delta){
        console.log("Delta é indefinido")
    }
    else{
    console.log("X1 = " + x1 + "\nX2 = " + x2 )}
}
baskara()

//Exercício 6
console.log ("\nExercicio 6")
const pessoa = {
    info : ["Melissa",19,"Vilhena, RO."],
        
}
console.log(pessoa.info[1])

//Exercício 7
console.log ("\nExercicio 7")
const frutas = ['Maça','Uva', 'Limão']
console.log(frutas[1])

//Exercício 8
console.log ("\nExercicio 8")
const cities = ['Vilhena', 'Cerejeiras,', ' Porto Velho']
console.log(cities[1].concat(cities[2]))

//Exercício 9
console.log ("\nExercicio 9")
const array = ['RO', 'SP', 'MT', 'GO'];
array.splice(1,1)
console.log(array);

//Exercício 10
console.log ("\nExercicio 10")
const states = ['RO', 'SP', 'MT', 'TO'];
states.shift()
console.log(states);

//Exercício 11
console.log ("\nExercicio 11")
const state = ['RO', 'SP', 'MT', 'TO'];
state.splice(4,0,'AM')
console.log(state);

//Exercício 12
console.log ("\nExercicio 12")
let estado = 'GO'
switch (estado) {
    case 'SP':
      console.log('São Paulo')
      break;
    case 'MT':      
      console.log('Mato Grosso')
      break;
    case 'RO':
      console.log('Rondônia')
      break;
    case 'GO':
      console.log('Goias')
      break;
    case 'AM':
      console.log('Amazonas')
      break;  
    default:
        console.log('Esta sigla não existe.')
  }
  
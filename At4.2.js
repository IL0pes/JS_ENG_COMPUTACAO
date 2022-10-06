
// At4.2--------------------------------------------------------
function sum(a,b,c){
    return a + b + c
}

function average(){
    let x = sum(3,8,1)
    console.log(`Soma = ${x}`, `Média = ${x/3}`)
}
average()

// At4.3--------------------------------------------------------


function max(k,g,b){
    console.log(Math.max(k,g,b))
}

function min(k,g,b){
    console.log(Math.min(k,g,b))
}

function main(){
    let k = 234, g = 834, b = 34
    max(k,g,b)
    min(k,g,b)
}
main()

// At4.4--------------------------------------------------------

let one   = 0, two   = 0, three = 0
let four  = 0, five  = 0, six   = 0

for(let x = 0; x < 1000000; x++){

    let y = Math.floor(Math.random() * 6) + 1;    

    switch (y){

        case 1:
            one += 1
            break
        
        case 2:
            two += 1
            break
        
        case 3:
            three += 1
            break    

        case 4:
            four += 1
            break     

        case 5:
            five += 1
            break 

        case 6:
            six += 1
            break     
    }
   
}

let resultOne = (one * 100) / 1000000
console.log('Lado 1: ' + resultOne.toFixed(2) + '%' )

let resultTwo = (two * 100) / 1000000
console.log('Lado 2: ' +resultTwo.toFixed(2) + '%' )

let resultThree = (three * 100) / 1000000
console.log('Lado 3: ' +resultThree.toFixed(2) + '%' )

let resultFour = (four * 100) / 1000000
console.log('Lado 4: ' +resultFour.toFixed(2) + '%' )

let resultFive = (five * 100) / 1000000
console.log('Lado 5: ' +resultFive.toFixed(2) + '%' )

let resultSix = (six * 100) / 1000000
console.log('Lado 6: ' +resultSix.toFixed(2) + '%' )

// At4.5--------------------------------------------------------
let primo = 43
let result = 0

for (let n = 1;n < primo; n++){    

    if (primo % n == 0 && n != 1){
        result += 1
    }        
}

if(result != 0){
    console.log(`${primo} não é primo.`)
}
else{
    console.log(`${primo} é primo.`)
}
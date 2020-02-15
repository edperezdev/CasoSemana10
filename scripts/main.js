// // 1. Crear una funcion que retorne la suma de dos números

function suma (a,b){
    return a+b
}

// /* 2. Crear una funcion que retorne la potencia de un número dado, esta función
// deberá recibir la potencia y el número a potenciar*/

function potencia (a,b){
let resultado = Math.pow(a,b)
return resultado
}

// 3. Cree una función que tome números y devuelva la suma de sus cubos.



function sumaCubos(...rest) {
    let suma = 0;
    for (let i = 0; i < rest.length; i++) {
        suma = suma + Math.pow(rest[i],3) 
        
    }
    return suma
}

console.log (sumaCubos(2,3,5,4,1,7));


// 4. Escribe una función que tome la base y la altura de un triángulo y devuelva su area

let base =parseFloat(prompt("Ingrese la base"))
let altura = parseFloat(prompt("Ingrese la altura"))

function area(){
    let area2= base * altura/2;
    return area2;
}
console.log (area());

/* 5. Crear una función llamada calculator que recibe 3 parametros, dos numeros y
una operación matematica(+,-,/,x,%), y si la operacion no es correcta que
envie un mensaje “El parámetro no es reconocido”*/

let a = parseFloat(prompt("Ingrese el primer número"))
let b = parseFloat(prompt("Ingrese el segundo número"))
let c = prompt("Ingrese la operación")

function calculator (a,b,c){
    if (c=="+"){
        return a + b
    }
    else if (c=="-"){
        return a-b
    }
    else if (c=="x"){
        return a*b
    }
    else if (c=="/"){
        return a/b
    }
    }
    else if (c=="%"){
        return a*b/100
    }
    else{
        alert(`El parámetro no es reconocido`);
    }
}

console.log (calculator(a,b,c))
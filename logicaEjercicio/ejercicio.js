let num1 = Number(prompt("ingrese un numero"));
let num2 = Number(prompt("ingrese un numero"));
let num3 = Number(prompt("ingrese un numero"));

let definirNums = (num1,num2,num3);

alert("se validara si los numeros son iguales")

if (num1==num2 && num2==num3) {
    console.log("Numeros iguales");
} else {
    console.log("los numeros son diferentes");
}

alert("se va adentificar cual es el número mayor, el número del centro y el número menor")

numMayor = Math.max(definirNums);
console.log(`el numero mayor es:${numMayor}`);

let numCentro = num2;
console.log(`el numero del centro es: ${numCentro}`);

numMenor = Math.min(num1,num2,num3);
console.log(`El numero menor es: ${numMenor}`);

    

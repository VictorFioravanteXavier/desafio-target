let numero: number = 12;
let fibonacci: Array<number> = [0, 1];
let index = 1;

while (fibonacci[fibonacci.length-1] <= numero){
    
    fibonacci.push(fibonacci[index-1]+fibonacci[index])
    index++
}

if (fibonacci.includes(numero)) {
    console.log("Pertence à sequência");
} else {
    console.log("Não pertence à sequência");
}
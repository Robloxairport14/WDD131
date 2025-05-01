const PI = 3.14;
let radius = 3;

let area = 0;

radius = 20;

area = radius * radius * PI;

console.log(area);

const one = 1;
const two = 2;

let result = one * two;
console.log(result);

result = one * two;

console.log(result);

let globol = "I'm globol";

function examplefunction(){
    let block = "I am block level or local";
    console.log(block);
    console.log(globol);
}

//console.log(block);
console.log(globol);
examplefunction();

globole = "Iam also global";
console.log(globole);
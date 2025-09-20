// Step 1: Set base number to last digit on student ID (3)

let baseNumber = 3; // Last digit of my student ID

// Grade Calculator 

function calculateGrade(score) {
if(score >= 90 && score <= 100) return "A";
else if(score >= 80 && score <= 89) return "B";
else if(score >= 70 && score <= 79) return "C";
else if(score >= 60 && score <= 69) return "D";
else return "F";
}

// score = base number x 10 + 5

let score = baseNumber * 10 + 5;
console.log ("Problem 1: Grade Calculator");
console.log (`Score: ${score}, Grade: ${calculateGrade(score)}\n`);

// Problem 2: Star Problem 

function showStars(rows) {
for (let i = 1; i <= rows; i++){
let stars = "";
for (let j = 1; j <= i; j++) {
stars += "+";
}

console.log(stars);

}
}

console.log("Problem 2: Star Pattern");
let rows = baseNumber + 2;
showStars(rows);
console.log("");

// Problem 3: Prime Number Checker

function isPrime(n) {
if (n < 2) return false;
for (let i = 2; i <= Math.sqrt(n); i++){
if (n % i === 0) return false;

}

return true;

}

let checkNumber = baseNumber + 10;
console.log("Problem 3: Prime Number Checker");
console.log(`Number: ${checkNumber}, Prime: ${isPrime(checkNumber)}\n`);

// Problem 4: Multiplication Table 

function MultiplicationTable (n){
for (let i = 1; i <= 10; i++){
console.log(`${n} x ${i} = ${n * i}`);

}
}

console.log("Problem 4: Multiplication Table");
MultiplicationTable(baseNumber);




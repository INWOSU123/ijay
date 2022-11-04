
// User Name
const userName = process.argv[2];

console.log(`Welcome ${userName}`);
//this line give you all your arguments in an array
const myArguments = process.argv.slice(2);

// Operation to be performed
const operation = process.argv[3];

//first & second arguments converted to numbers
const arg1 = Number(process.argv[4]);
const arg2 = Number(process.argv[5]);

function getSquare(arg1) {
  return Math.pow(arg1, 2);
}
function percentage(arg1, arg2){
    return arg1 / 100 * arg2;
}
function getSquareroot(arg1){
  return Math.sqrt(arg1);
}
function substract(arg1,arg2){
  return arg1 - arg2;
}
function add(arg1, arg2) {
  return arg1 + arg2;
}

function multiply(arg1, arg2) {
  return arg1 * arg2;
}
function divide(arg1, arg2) {
    return arg1 /arg2;
}
if (operation == "substract"){
  console.log("Substraction =", substract(arg1, arg2));
}


if (operation == "add") {
  console.log("Sum =", add(arg1, arg2));
}

if (operation == "square") {
  console.log("Square = ", getSquare(arg1));
}
if (operation == "squareroot") {
  console.log("squareroot = ", getSquareroot(arg1));
}

if (operation == "multiply") {
  console.log("Product = ", multiply(arg1, arg2));
}
if (operation == "divide" ) {
    console.log("division =>" , divide(arg1,arg2));
}
if (operation == "percentage") {
    console.log(arg1 ,"percent of" ,arg2,"= ",percentage(arg1, arg2).toFixed(2),"%");
}
if (operation == "help"){
 console.log("The valid commands are add, substract, multiply, divide,squareroot,square and percentage\n\n sample command=> node calc 'username' add 22 22=> This command will return 44 ");

}
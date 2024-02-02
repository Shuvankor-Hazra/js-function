function doubleIt(number){
    const double = number * 2;
    console.log(number, double);
}
console.log("I will call the function.");
doubleIt(15);
console.log("-----------------");
doubleIt(85);
console.log("-----------------");
doubleIt(12345);
const number = 55;
doubleIt(number);
const money = 122;
doubleIt(money);


function difference(num1, num2){
    const diff = num1 - num2;
    console.log(num1,"-", num2, "=", diff);
}
const fatherAge = 100;
const myAge = 75;
difference(fatherAge,myAge);
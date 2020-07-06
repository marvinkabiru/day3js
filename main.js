//premitive
let myName = "Marv";
//you just have to use let or var one time then you canjust usse the variable and assign it a new value
myName = myName.toUpperCase();
console.log(myName);

//object version...
let yourName = new String("Tom");
console.log(typeof(myName));
console.log(typeof(yourName));

//methods for numbers
let x = 5;
//to get max safe number
console.log(Number.MAX_SAFE_INTEGER);

//infinity
let babies = 9007199254740991;
console.log(Math.pow(babies, 200));
//or
console.log(1/0);
console.log(5/-0);

{
    var sliceOfPizza = 10;
    console.log(sliceOfPizza - 10);
}

let z = 10;
let g = "8";
//this will only concatinate the string and the number
console.log(z + g);

//to add them correctly by making the string a number
let gInt = Number.parseInt(g);
console.log(z+gInt);

//when using decimals, we use parseFloat, parseInt crops the decimals
let h = "12.766456";
let p = 100;
let hInt =  Number.parseFloat(h);
console.log(hInt + p);
'use strict';


//Hello world proof of life
console.log("hello world");

//Variables

var myvar=5;

console.log('myvar is: ', myvar);

//math printed to the consol

console.log('myvar plus 3 ', myvar + 3);

//strings

var mystring = 'this is really cool';
var myaddon = 'this is the best language in the world'




console.log('mystring says:', mystring);
//adding stings is called "concatenation", we can concatenate strings together. short version concat
console.log(mystring + ' ' + myaddon)

//Lab 48

let name = 'brian';
let sum = 5 + 5;
let divide = 10 / 2;

function info() {  
console.log('name:', name);
console.log('sum of 5 + 5 =', sum);
console.log('10/2 is:', divide);
}

info(); //I'm invoking the function or otherwise running it.

function parttwo(yourname, add1, add2, div1, div2){
    console.log('name:', yourname);
    console.log('sum of ' + add1 + ' + ' + add2 + ' is: ', add1 + add2);
    console.log(+ div1 + ' divided by ' + div2 + ' is:', div1 / div2);
}

parttwo('jason', 4, 5, 16, 4); //I'm invking the function with specific arguments.
parttwo('billy', 3, 9, 20, 5);
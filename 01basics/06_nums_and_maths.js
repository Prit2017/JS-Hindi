const score = 400;
//console.log(score);

const balance = new Number(100);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));
const otherNumber = 11123.456787;
//console.log(otherNumber.toPrecision(4));

const hundred = 100000;
//console.log(hundred.toLocaleString("en-IN")); /// will formate between in Indian number system

/// ++++++++++++++++++++++++  MATHS   ++++++++++++++++++++++++++++++++++++
/*
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(2.995));

console.log(Math.ceil(4.2)); //hightest value roundoff
console.log(Math.floor(4.9)); //lowest value roundoff
console.log(Math.min(4, 3, 5, 6, 7));
console.log(Math.max(4, 3, 5, 6, 7));
*/

console.log(Math.random());
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;
console.log(Math.random() * (max - min + 1) + min);

console.log(Math.floor(Math.random() * (max - min + 1) + min));
// added +1 to avoid getting xero as output.

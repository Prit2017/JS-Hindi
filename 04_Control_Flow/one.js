//if
const isUserLoggedIn = true;
const temp = 51;
/*
if (temp === 41) {
	console.log("less then 50");
} else {
	console.log("greater then 50");
}

if (false) {
}
//<, >, <=, ==, !=, ===
const score = 200;

if (score > 100) {
	const power = "fly";
	console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);
*/

//SHORT HAND NOTATION
const balance = 1000;

//if (balance > 500) console.log("test"),console.log('test2'); // bad code practice

if (balance < 500) {
	console.log("less than 500");
} else if (balance < 750) {
	console.log("less than 750");
} else if (balance < 950) {
	console.log("less than 900");
} else {
	console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard) {
	console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
	console.log("User logged in");
}

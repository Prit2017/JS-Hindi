const user = {
	username: "hitesh",
	price: 999,

	welcomeMessage: function () {
		console.log(` ${this.username} , welcome to website`);
		console.log(this);
	},
};
/*
user.welcomeMessage(); // hitesh , welcome to website
user.username = "sam";
user.welcomeMessage(); // sam , welcome to website

console.log(this);

function chai() {
	let username = "prit";
	console.log(this.username);
}
chai();

const chai = function () {
	let username = "prit";
	console.log(this.username);
};

const chai = () => {
	let username = "prit";
	console.log(this);
};
//chai();
const addTwo = (num1 , num2) =>{
	return num1 + num2;
}
*/
//IMPLESITE RETURN
//const addTwo = (num1, num2) => num1 + num2;
//const addTwo = (num1, num2) => num1 + num2; // need to write 'return'
const addTwo = (num1, num2) => ({
	username: "Prit",
});

console.log(addTwo(3, 5));

const myArray = [2, 4, 5, 7, 8];
//myArray.forEach();

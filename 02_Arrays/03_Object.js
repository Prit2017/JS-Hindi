//Singleton

//Object literals
const JsUser = {
	name: "John",
	"full name": "John Patel",
	age: 18,
	location: "Jaipur",
	email: "hitesh1@gmail.com",
	isLoggedIn: false,
	lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser.email);

JsUser.email = "pritp@gmail.com";
//Object.freeze(JsUser);
JsUser.email = "prit@ms.com";
//console.log(JsUser);

JsUser.greeting = function () {
	console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
	console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

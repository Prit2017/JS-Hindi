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

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser.email);

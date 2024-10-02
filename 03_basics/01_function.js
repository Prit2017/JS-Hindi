function sayMyName() {
	console.log("Prit");
}

//sayMyName();

// function addTwoNumbers(number1, number2) {
// 	console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
	//let result = number1 + number2;
	return number1 + number2;
}

// const result = addTwoNumbers(3, 4);
// console.log("Results: ", result);

// function loginUserMessage(username) {
// 	return `${username} just logged in. `;
// }

// loginUserMessage("prit");
function loginUserMessage(username) {
	if (!username) {
		console.log("Please enter a username");
		return;
	}
	return `${username} just logged in`;
}
console.log(loginUserMessage());

function calculateCartPrice(...num1) {
	return num1;
}
console.log(calculateCartPrice(200, 300, 400));

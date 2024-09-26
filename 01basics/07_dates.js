//Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
console.log(typeof myDate);

//let myCreated = new Date(2023, 0, 23);
let myCreated = new Date(2023, 0, 23, 5, 3);
console.log(myCreated.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreated.getTime());
console.log(Date.now() / 1000);

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time`

console.log(
	newDate.toLocaleString("default", {
		weekday: "long",
		year: "numeric",
		month: "long",
	})
);

//const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
	email: "some@gmail.com",
	fullname: {
		userFullname: {
			firstName: "Prit",
			lastName: "Patel",
		},
	},
};

//console.log(regularUser.fullname.userFullname.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };
//const obj3 = { obj1, obj2 };
//const obj3 = Object.assign({}, obj1, obj2);
//console.log(obj3);

//const obj3 = { ...obj1, ...obj2, ...obj3 };
// v console.log(obj3);

const users = [
	{
		id: 1,
		email: "ha@g.com",
	},
	{
		id: 1,
		email: "ha@g.com",
	},
	{
		id: 1,
		email: "ha@g.com",
	},
];
users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const courses = {
	courseNam: "JS in Hindi",
	price: "999",
	courseInstructor: "hitesh",
};

//courses.courseInstructor
const { courseInstructor: instructor } = courses;
//console.log(courseInstructor);
console.log(instructor);

const navbar = ({ company }) => {};
navbar((company = "hitesh"));

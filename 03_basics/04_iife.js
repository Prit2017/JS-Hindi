//Immediately Invoked Function Expression (IIFE)

//Named IIFE
(function chai() {
	console.log(`DB CONNECTED`);
})();

//UNNAMED IIFE
(() => {
	console.log(`DB CONNECTED TWO`);
})();

((name) => {
	console.log(`DB Connected to ${name}`);
})("hitesh");

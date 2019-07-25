// Copy the code and put in browser and debug wakeUp() and press step =>

function takeShower() {
	return "Showering";
}

function cookFood() {
	let items = ['eggs', 'bread', 'milk'];
	return items[Math.floor(Math.random() * items.length)];
};

function eatBreakfast() {
	let meal = cookFood();
	return `Eating ${meal}`;
};

function wakeUp() {
	takeShower();
	eatBreakfast();
	console.log('Okey ready to go to work.')
}

wakeUp();

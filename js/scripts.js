
var a = prompt('Podaj wartość a');
var b = prompt('Podaj wartość b');
var value = (a * a) + (2 * a * b) - (b * b);

console.log('Wynik działania to ' + value);

if (value < 0) {
	console.log('Wynik jest ujemny');	
} else if (value > 0) {
	console.log ('Wynik jest dodatni');
} else {
	console.log ('Wynik to zero');
}

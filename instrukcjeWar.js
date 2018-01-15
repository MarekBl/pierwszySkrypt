var a = 5;
var b = 10;
var value = (a * a) - (2 * a * b) + (b * b);

console.log(value);

if (value > 0) {
	console.log('Wynik dodatni')
} else {
	console.log('Wynik ujemny')
}

if (value > 0 || value < 0) {
	console.log('WYnik jest różny od zera!')
} else {
	console.log('Wynikiem jest 0!')
}
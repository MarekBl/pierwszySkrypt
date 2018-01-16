var femaleNames = ['Ania', 'Weronika', 'Kasia', 'Basia'];
var maleNames = ['Marek', 'Tomek', 'Krzysztof', 'Jacek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';

if(allNames.indexOf(newName) === -1){
	
	console.log('NIe ma takiego imienia')
	allNames.push(newName)

}else{
	
	console.log('Jest juz takie imie')

}

console.log(allNames);
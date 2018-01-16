function getTriangleArea(a, h) {
	if(a <= 0 && h <=0){
		alert('NIeprawidlowe dane')
	} else{
		return( a * h / 2)
	}
}

console.log(getTriangleArea(10, 5));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 25);
var triangle3Area = getTriangleArea(7, 8);

console.log(triangle3Area);
var r = (id, text) => { // useful for incremental updating
	document.getElementById(id).textContent = text
}
var i2 = (x, y) => { // useful for incrementals in general
	x = x + y
}
var i1 = (x) => {x++}
var cl = (x) => { // useful for anything
	console.log(x)
}

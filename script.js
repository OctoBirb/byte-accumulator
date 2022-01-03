var x = 10
var xps = 0
var canvas = document.getElementById('xVis');
  
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

function draw() {
if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = 'rgb(0, 255, 0)'
	ctx.fillRect(75 - Math.log(x) / 2, 75 - Math.log(x) / 2, Math.log(x), Math.log(x))
}}

function ix() { x++ }

var save = {
	x: x,
	xps: xps
}
function saveload() {
	localStorage.setItem("save", JSON.stringify(save))
	var saveL = JSON.parse(localStorage.getItem("save"));
	x = saveL.x
	xps = saveL.xps
	r("sDis", `${saveL}`)
}

window.setInterval(function() {
	r("xDis", `You have ${x} bytes. (0 KB)`)
 	draw()
}, 20)

window.setInterval(function() {
	saveload()
}, 15000)

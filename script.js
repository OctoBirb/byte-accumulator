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


function save() {
	var save = {
		x: x,
		xps: xps
	}
	localStorage.setItem("save",JSON.stringify(save));
}
function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
	x = savegame.x
	xps = savegame.xps
}

window.setInterval(function() {
	r("xDis", `You have ${x} bytes. (0 KB)`)
 	draw()
}, 20)

window.setInterval(function() {
	save()
}, 15000)

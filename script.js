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
	ctx.fillStyle = 'rgb(255, 255, 255)'
	ctx.fillRect(25, 25, Math.log(x), Math.log(x))
}}

function ix() { x++ }

var save = {
	x: x,
    xps: xps
}
function save() {
    localStorage.setItem("save", JSON.stringify(save))
}
function load() {
    var saveL = JSON.parse(localStorage.getItem("save"));
    x = savegame.x
    xps = savegame.xps
}

window.setInterval(function() {
	r("xDis", `You have ${x} bytes. (0 KB)`)
	draw()
	x++
}, 20)

window.setInterval(function() {
    localStorage.setItem("save", JSON.stringify(save))
}, 15000)

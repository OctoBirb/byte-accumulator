var x = 10
var xps = 0
var canvas = document.getElementById('xVis');

if (canvas.getContext) {
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = 'rgb(255, 255, 255)'
	ctx.fillRect(25, 25, 100, 100)
}

function ix() { x++ }

window.setInterval(function() {
	r("xDis", `You have ${x} bytes. (0 KB)`)
}, 20)

var save = {
    x: x
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
    save()
}, 15000)
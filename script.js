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
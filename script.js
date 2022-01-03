var x = 10
var xps = 0
function ix() { x++ }
window.setInterval(function() {
	r("xDis", `You have ${x} bytes. (0 KB)`)
}, 20)
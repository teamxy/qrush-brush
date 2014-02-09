var onDrag = function (x, y) {
	setPreview(true);
	fill([0,0,0,0]);
	line(0, 0, x, y, 0xffffffff);
}

var onRelease = function (x, y) {
	setPreview(false);
	rect(0, 0, getCanvasWidth(), getCanvasHeight(), 0xff999999, true);
}
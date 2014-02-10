/**
 * From: http://perfectionkills.com/exploring-canvas-drawing-techniques/
 */
var isDrawing, points = [ ];
var color = 0x15333333;

var onClick = function(x, y) {
  isDrawing = true;
  points.push({ x: x, y: y });
};

var onDrag = function(x, y) {
  if (!isDrawing) return;

  points.push({ x: x, y: y });

  for (var i = 1; i < points.length; i++) {
    line(points[i-1].x, points[i-1].y, points[i].x, points[i].y, color);

    var nearPoint = points[i-5];

    if (nearPoint) {
      line(nearPoint.x, nearPoint.y, points[i].x, points[i].y, color);
    }
  }

};

var onRelease = function() {
  isDrawing = false;
  points.length = 0;
};
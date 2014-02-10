var t = ["wow", "such font", "many brush", "so qt", "wow"];
var c = [0xFFEE0000, 0xFF00FFFF, 0xFF33FF33, 0xFFFFFF00, 0xFFFF00FF];

var ti = 0;
var ci = 0;

function onRelease(x,y){
  var str = t[ti];
  var col = c[ci];

  text(x, y, Math.random() * 38 + 28, str, "Comic Sans MS", col);

  ti = (ti + 1) % t.length;
  ci = (ci + 1) % c.length;

  log(str);
}
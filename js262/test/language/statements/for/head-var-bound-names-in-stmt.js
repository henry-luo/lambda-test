

/*---
description: The body may re-declare variables declared in the head
esid: sec-for-statement
es6id: 13.7.4
---*/

var iterCount = 0;
var first = true;

for (var x; first; first = false) {
  var x;
  iterCount += 1;
}

assert.sameValue(iterCount, 1);



/*---
description: The head's declaration may contain duplicate entries
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
es6id: 13.7.5
---*/

var iterCount = 0;

for (var [x, x] of [[1, 2]]) {
  assert.sameValue(x, 2);
  iterCount += 1;
}

assert.sameValue(iterCount, 1);

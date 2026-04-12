

/*---
description: The head's declaration may contain duplicate entries
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
es6id: 13.7.5
---*/

var iterCount = 0;

for (var [x, x] in { ab: null }) {
  assert.sameValue(x, 'b');
  iterCount += 1;
}

assert.sameValue(iterCount, 1);

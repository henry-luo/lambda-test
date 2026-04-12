

/*---
description: >
    Head's AssignmentExpression may be a MemberExpression
esid: sec-for-in-and-for-of-statements-static-semantics-early-errors
es6id: 13.7.5
---*/

var iterCount = 0;
var x = {};

for (x.y in { attr: null }) {
  assert.sameValue(x.y, 'attr');
  iterCount += 1;
}

assert.sameValue(iterCount, 1);

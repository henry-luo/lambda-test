

/*---
esid: sec-scripts-static-semantics-early-errors
es6id: 15.1.1
description: >
  A direct eval in the functon code of an ArrowFunction may not contain
  `new.target`
info: |
  - It is a Syntax Error if StatementList Contains NewTarget unless the source
    code containing NewTarget is eval code that is being processed by a direct
    eval that is contained in function code that is not the function code of an
    ArrowFunction.
features: [arrow-function, new.target]
---*/

var caught;
var f = () => eval('new.target;');

try {
  f();
} catch (err) {
  caught = err;
}

assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, SyntaxError);

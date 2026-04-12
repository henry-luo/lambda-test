

/*---
esid: sec-scripts-static-semantics-early-errors
es6id: 15.1.1
description: A direct eval in global code may not contain SuperProperty
info: |
  - It is a Syntax Error if StatementList Contains super unless the source code
    containing super is eval code that is being processed by a direct eval that
    is contained in function code that is not the function code of an
    ArrowFunction.
features: [super]
---*/

var caught;

try {
  eval('super.property;');
} catch (err) {
  caught = err;
}

assert.sameValue(typeof caught, 'object');
assert.sameValue(caught.constructor, SyntaxError);

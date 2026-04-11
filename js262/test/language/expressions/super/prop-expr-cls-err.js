

/*---
esid: sec-super-keyword
es6id: 12.3.5
description: Abrupt completion from Expression evaluation
info: |
  1. Let propertyNameReference be the result of evaluating Expression.
  2. Let propertyNameValue be ? GetValue(propertyNameReference).

  6.2.3.1 GetValue

  1. ReturnIfAbrupt(V).
features: [class]
---*/

var thrown = new Test262Error();
var caught;
function thrower() {
  throw thrown;
}
class C {
  method() {
    try {
      super[thrower()];
    } catch (err) {
      caught = err;
    }
  }
}

C.prototype.method();

assert.sameValue(caught, thrown);

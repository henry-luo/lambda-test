

/*---
esid: sec-super-keyword
es6id: 12.3.5
description: Returns abrupt completion resulting from ArgumentListEvaluation
info: |
  [...]
  4. Let argList be ArgumentListEvaluation of Arguments.
  5. ReturnIfAbrupt(argList).
features: [class]
---*/

var thrown = new Test262Error();
var thrower = function() {
  throw thrown;
};
var caught;
class C extends Object {
  constructor() {
    try {
      super(thrower());
    } catch (err) {
      caught = err;
    }
  }
}


try {
  new C();
} catch (_) {}

assert.sameValue(caught, thrown);

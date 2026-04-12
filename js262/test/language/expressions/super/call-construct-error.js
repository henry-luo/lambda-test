

/*---
esid: sec-super-keyword
es6id: 12.3.5
description: >
  Behavior when invocation of "parent" constructor returns an abrupt completion
info: |
  [...]
  6. Let result be ? Construct(func, argList, newTarget).
features: [class]
---*/

var thrown = new Test262Error();
var caught;
function Parent() {
  throw thrown;
}

class Child extends Parent {
  constructor() {
    try {
      super();
    } catch (err) {
      caught = err;
    }
  }
}


try {
  new Child();
} catch (_) {}

assert.sameValue(caught, thrown);

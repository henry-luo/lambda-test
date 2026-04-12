

/*---
description: Behavior when error thrown while type coercing second argument
es6id: 21.2.5.8
info: |
    21.2.5.8 RegExp.prototype [ @@replace ] ( string, replaceValue )

    [...]
    6. Let functionalReplace be IsCallable(replaceValue).
    7. If functionalReplace is false, then
       a. Let replaceValue be ToString(replaceValue).
       b. ReturnIfAbrupt(replaceValue).
features: [Symbol.replace]
---*/

var arg = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  /./[Symbol.replace]('', arg);
});



/*---
description: Behavior when error thrown while type coercing first argument
es6id: 21.2.5.8
info: |
    21.2.5.8 RegExp.prototype [ @@replace ] ( string, replaceValue )

    [...]
    3. Let S be ToString(string).
    4. ReturnIfAbrupt(S).
features: [Symbol.replace]
---*/

var arg = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  /./[Symbol.replace](arg);
});

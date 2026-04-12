

/*---
es6id: 21.2.5.11
description: Behavior when error thrown while coercing `string` argument
info: |
    [...]
    3. Let S be ToString(string).
    4. ReturnIfAbrupt(S).
features: [Symbol.split]
---*/

var uncoercibleObj = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  /./[Symbol.split](uncoercibleObj);
});

assert.throws(TypeError, function() {
  /./[Symbol.split](Symbol.split);
});

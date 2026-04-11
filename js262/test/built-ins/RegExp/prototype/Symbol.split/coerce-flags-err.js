

/*---
es6id: 21.2.5.11
description: Behavior when error thrown while coercing `flags` property
info: |
    [...]
    7. Let flags be ToString(Get(rx, "flags")).
    8. ReturnIfAbrupt(flags).
features: [Symbol.split]
---*/

var uncoercibleFlags = {
  flags: {
    toString: function() {
      throw new Test262Error();
    }
  }
};

assert.throws(Test262Error, function() {
  RegExp.prototype[Symbol.split].call(uncoercibleFlags);
});

uncoercibleFlags = {
  flags: Symbol.split
};

assert.throws(TypeError, function() {
  RegExp.prototype[Symbol.split].call(uncoercibleFlags);
});



/*---
description: String coercion of first parameter
es6id: 21.2.5.6
info: |
    21.2.5.6 RegExp.prototype [ @@match ] ( string )

    [...]
    3. Let S be ToString(string)
    [...]
features: [Symbol.match]
---*/

var obj = {
  valueOf: function() {
    throw new Test262Error('This method should not be invoked.');
  },
  toString: function() {
    return 'toString value';
  }
};

assert.notSameValue(/toString value/[Symbol.match](obj), null);



/*---
description: Type coercion of first argument
es6id: 21.2.5.8
info: |
    21.2.5.8 RegExp.prototype [ @@replace ] ( string, replaceValue )

    [...]
    3. Let S be ToString(string).
    [...]
features: [Symbol.replace]
---*/

var arg = {
  valueOf: function() {
    throw new Test262Error('This method should not be invoked.');
  },
  toString: function() {
    return 'toString value';
  }
};

assert.sameValue(/./[Symbol.replace](arg, 'x'), 'xoString value');

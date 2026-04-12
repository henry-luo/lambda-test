

/*---
es6id: 21.2.5.9
description: String coercion of `string` argument
info: |
    [...]
    3. Let S be ToString(string).
    [...]
features: [Symbol.search]
---*/

var obj = {
  toString: function() {
    return 'toString value';
  }
};

assert.sameValue(/ring/[Symbol.search](obj), 4);

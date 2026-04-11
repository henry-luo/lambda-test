

/*---
es6id: 9.5.7
description: >
    The result of [[HasProperty]] is a Boolean value and will affect has
    checkings. True returned when target property doesn't exists;
features: [Proxy]
---*/

var p = new Proxy({}, {
  has: function(t, prop) {
    return true;
  }
});

assert.sameValue(("attr" in p), true);

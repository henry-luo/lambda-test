

/*---
es6id: 9.5.10
description: >
    [[Delete]] (P)

    The result is a Boolean value.
features: [Proxy, Reflect]
---*/

var p = new Proxy({}, {
  deleteProperty: function() {
    return 1;
  }
});

assert.sameValue(Reflect.deleteProperty(p, "attr"), true);

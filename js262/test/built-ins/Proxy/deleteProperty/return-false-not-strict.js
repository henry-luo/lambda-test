

/*---
es6id: 9.5.10
description: >
    [[Delete]] (P)

    11. If booleanTrapResult is false, return false.
flags: [noStrict]
features: [Proxy]
---*/

var p = new Proxy({}, {
  deleteProperty: function() {
    return false;
  }
});

assert.sameValue(delete p.attr, false);

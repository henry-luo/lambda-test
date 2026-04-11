

/*---
es6id: 9.5.10
description: >
    [[Delete]] (P)

    14. If targetDesc is undefined, return true.
features: [Proxy]
---*/

var p = new Proxy({}, {
  deleteProperty: function() {
    return true;
  }
});

assert.sameValue(delete p.attr, true);

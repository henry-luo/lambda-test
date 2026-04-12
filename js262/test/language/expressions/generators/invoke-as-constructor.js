

/*---
description: >
    Generator expressions cannot be used as constructors.
es6id: 14.4
features: [generators]
---*/

var g = function*(){};

assert.throws(TypeError, function() {
  var instance = new g();
});

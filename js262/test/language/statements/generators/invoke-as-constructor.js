

/*---
description: >
    Generator statements cannot be used as constructors.
es6id: 14.4
features: [generators]
---*/

function* g(){}

assert.throws(TypeError, function() {
  var instance = new g();
});

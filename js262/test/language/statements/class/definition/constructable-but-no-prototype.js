

/*---
es6id: 14.5
description: >
    class constructable but no prototype
---*/
var Base = function() {}.bind();
assert.throws(TypeError, function() {
  class C extends Base {}
});

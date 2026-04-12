

/*---
es5id: 15.2.3.9-2-3
description: Object.freeze - inherited accessor properties are not frozen
---*/

var proto = {};

Object.defineProperty(proto, "Father", {
  get: function() {
    return 10;
  },
  configurable: true
});

var Con = function() {};
Con.prototype = proto;

var child = new Con();
Object.freeze(child);

var beforeDeleted = proto.hasOwnProperty("Father");
delete proto.Father;
var afterDeleted = proto.hasOwnProperty("Father");

assert(beforeDeleted, 'beforeDeleted !== true');
assert.sameValue(afterDeleted, false, 'afterDeleted');

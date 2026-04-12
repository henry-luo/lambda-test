

/*---
es6id: 25.2
description: >
    When a generator function is invoked as a method of an object, its context
    is that object.
features: [generators]
---*/

var context;

function* g() {
  context = this;
}
var obj = {
  g: g
};
var iter = obj.g();

iter.next();

assert.sameValue(context, obj);

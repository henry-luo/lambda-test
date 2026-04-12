

/*---
es5id: 15.2.3.12-2-2
description: >
    Object.isFrozen - inherited accessor property is not considered
    into the for each loop
---*/

var proto = {};

function get_func() {
  return 10;
}

function set_func() {}

Object.defineProperty(proto, "Father", {
  get: get_func,
  set: set_func,
  configurable: true
});

var Con = function() {};
Con.prototype = proto;

var child = new Con();

Object.preventExtensions(child);

assert(Object.isFrozen(child), 'Object.isFrozen(child) !== true');

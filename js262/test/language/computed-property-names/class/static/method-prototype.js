

/*---
es6id: 14.5.14
description: >
    In a class, computed property names for static
    methods that are named "prototype" throw a TypeError
---*/

assert.throws(TypeError, function() {
  class C {
    static ['prototype']() {}
  }
});

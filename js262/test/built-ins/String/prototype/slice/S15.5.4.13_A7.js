

/*---
info: String.prototype.slice can't be used as constructor
es5id: 15.5.4.13_A7
description: Checking if creating the String.prototype.slice object fails
---*/

var FACTORY = String.prototype.slice;

assert.throws(TypeError, function() {
  new FACTORY;
});

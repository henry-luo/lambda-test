

/*---
description: >
  Throws a TypeError if species constructor is not a constructor function.
info: |
  SharedArrayBuffer.prototype.slice ( start, end )

features: [SharedArrayBuffer, Symbol.species]
---*/

var speciesConstructor = {};

var arrayBuffer = new SharedArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;

function callSlice() {
  arrayBuffer.slice();
}

speciesConstructor[Symbol.species] = {};
assert.throws(TypeError, callSlice, "`constructor[Symbol.species]` value is Object");

speciesConstructor[Symbol.species] = Function.prototype;
assert.throws(TypeError, callSlice, "`constructor[Symbol.species]` value is Function.prototype");



/*---
description: >
  Throws a TypeError if species constructor returns `this` value.
info: |
  SharedArrayBuffer.prototype.slice ( start, end )

features: [SharedArrayBuffer, Symbol.species]
---*/

var speciesConstructor = {};
speciesConstructor[Symbol.species] = function(length) {
  return arrayBuffer;
};

var arrayBuffer = new SharedArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;

assert.throws(TypeError, function() {
  arrayBuffer.slice();
});

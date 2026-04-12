

/*---
description: >
  New SharedArrayBuffer instance is created from SpeciesConstructor.
info: |
  SharedArrayBuffer.prototype.slice ( start, end )

features: [SharedArrayBuffer, Symbol.species]
---*/

var resultBuffer;

var speciesConstructor = {};
speciesConstructor[Symbol.species] = function(length) {
  return resultBuffer = new SharedArrayBuffer(length);
};

var arrayBuffer = new SharedArrayBuffer(8);
arrayBuffer.constructor = speciesConstructor;

var result = arrayBuffer.slice();
assert.sameValue(result, resultBuffer);

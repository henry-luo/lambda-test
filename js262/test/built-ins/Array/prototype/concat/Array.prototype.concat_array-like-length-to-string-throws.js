

/*---
esid: sec-array.prototype.concat
description: Array.prototype.concat array like length to string throws
features: [Symbol.isConcatSpreadable]
---*/
var objWithPoisonedLengthToString = {
  "length": {
    toString: function() {
      throw new Test262Error();
    },
    valueOf: null
  },
  "1": "A",
  "3": "B",
  "5": "C"
};
objWithPoisonedLengthToString[Symbol.isConcatSpreadable] = true;
assert.throws(Test262Error, function() {
  [].concat(objWithPoisonedLengthToString);
}, '[].concat(objWithPoisonedLengthToString) throws a Test262Error exception');

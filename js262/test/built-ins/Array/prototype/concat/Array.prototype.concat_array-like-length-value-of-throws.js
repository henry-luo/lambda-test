

/*---
esid: sec-array.prototype.concat
description: Array.prototype.concat array like length valueOf throws
features: [Symbol.isConcatSpreadable]
---*/
var objWithPoisonedLengthValueOf = {
  "length": {
    valueOf: function() {
      throw new Test262Error();
    },
    toString: null
  },
  "1": "A",
  "3": "B",
  "5": "C"
};
objWithPoisonedLengthValueOf[Symbol.isConcatSpreadable] = true;
assert.throws(Test262Error, function() {
  [].concat(objWithPoisonedLengthValueOf);
}, '[].concat(objWithPoisonedLengthValueOf) throws a Test262Error exception');

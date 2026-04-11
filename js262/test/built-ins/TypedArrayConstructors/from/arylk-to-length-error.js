

/*---
esid: sec-%typedarray%.from
description: Returns error produced by interpreting length property as a length
info: |
  22.2.2.1 %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  ...
  7. Let len be ? ToLength(? Get(arrayLike, "length")).
  ...
includes: [testTypedArray.js]
features: [TypedArray]
---*/

var arrayLike = { length: {} };

arrayLike.length = {
  valueOf: function() {
    throw new Test262Error();
  }
};

testWithTypedArrayConstructors(function(TA) {
  assert.throws(Test262Error, function() {
    TA.from(arrayLike);
  });
}, null, ["passthrough"]);

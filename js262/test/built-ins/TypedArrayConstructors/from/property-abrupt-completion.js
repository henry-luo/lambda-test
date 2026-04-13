

/*---
esid: sec-%typedarray%.from
description: >
  Return abrupt from source property
info: |
  22.2.2.1 %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  ...
  10. Repeat, while k < len
    ...
    b. Let kValue be ? Get(arrayLike, Pk).
  ...
includes: [testTypedArray.js]
features: [TypedArray]
---*/

var source = {
  length: 2
};
Object.defineProperty(source, "0", {
  get() {
    throw new Test262Error();
  }
});

testWithTypedArrayConstructors(function(TA) {
  assert.throws(Test262Error, function() {
    TA.from(source);
  });
});

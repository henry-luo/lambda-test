

/*---
esid: sec-%typedarray%.from
description: >
  Calls and return abrupt completion from custom constructor
info: |
  22.2.2.1 %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  ...
  8. Let targetObj be ? TypedArrayCreate(C, «len»).
  ...

  22.2.4.6 TypedArrayCreate ( constructor, argumentList )

  1. Let newTypedArray be ? Construct(constructor, argumentList).
  ...
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var called = 0;
  var ctor = function() {
    called++;
    throw new Test262Error();
  };

  assert.throws(Test262Error, function() {
    TA.from.call(ctor, []);
  });

  assert.sameValue(called, 1);
}, null, ["passthrough"]);



/*---
esid: sec-%typedarray%.from
description: >
  Modifications to input array after iteration are handled correctly.
info: |
  %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  ...
  6. If usingIterator is not undefined, then
    a. Let values be ? IteratorToList(? GetIteratorFromMethod(source, usingIterator)).
    b. Let len be the number of elements in values.
    ...
    e. Repeat, while k < len,
      ...
      vi. Perform ? Set(targetObj, Pk, mappedValue, true).
      ...
features: [TypedArray]
---*/

let values = [0, {
  valueOf() {
    
    values.length = 0;
    return 100;
  }
}, 2];


let ta = Int32Array.from(values);

assert.sameValue(ta.length, 3);
assert.sameValue(ta[0], 0);
assert.sameValue(ta[1], 100);
assert.sameValue(ta[2], 2);

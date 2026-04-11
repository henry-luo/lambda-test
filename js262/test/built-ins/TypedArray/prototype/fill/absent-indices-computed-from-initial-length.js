

/*---
esid: sec-%typedarray%.prototype.fill
description: >
  Absent start and end parameters are computed from initial length.
info: |
  %TypedArray%.prototype.fill ( value [ , start [ , end ] ] )

  ...
  2. Let taRecord be ? ValidateTypedArray(O, seq-cst).
  3. Let len be TypedArrayLength(taRecord).
  ...
  5. Otherwise, set value to ? ToNumber(value).
  6. Let relativeStart be ? ToIntegerOrInfinity(start).
  ...
  9. Else, let startIndex be min(relativeStart, len).
  10. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToIntegerOrInfinity(end).
  ...
  13. Else, let endIndex be min(relativeEnd, len).
  ...

features: [TypedArray, resizable-arraybuffer]
---*/

let rab = new ArrayBuffer(1, {maxByteLength: 4});
let ta = new Int8Array(rab);

let value = {
  valueOf() {
    
    rab.resize(4);

    
    return 123;
  }
};


assert.sameValue(ta.length, 1);
assert.sameValue(ta[0], 0);

ta.fill(value);


assert.sameValue(ta.length, 4);
assert.sameValue(ta[0], 123);
assert.sameValue(ta[1], 0);
assert.sameValue(ta[2], 0);
assert.sameValue(ta[3], 0);

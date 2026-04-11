

/*---
esid: sec-%typedarray%.prototype.includes
description: >
  Index is compared against the initial length.
info: |
  %TypedArray%.prototype.includes ( searchElement [ , fromIndex ] )

  ...
  2. Let taRecord be ? ValidateTypedArray(O, seq-cst).
  3. Let len be TypedArrayLength(taRecord).
  ...
  5. Let n be ? ToIntegerOrInfinity(fromIndex).
  ...
  9. If n ≥ 0, then
    a. Let k be n.
  ...
  11. Repeat, while k < len,
    ...

features: [TypedArray, resizable-arraybuffer]
---*/

let rab = new ArrayBuffer(4, {maxByteLength: 20});
let ta = new Int8Array(rab);

let index = {
  valueOf() {
    
    rab.resize(0);

    
    return 10;
  }
};


assert.sameValue(ta.length, 4);

let result = ta.includes(undefined, index);


assert.sameValue(ta.length, 0);

assert.sameValue(result, false);

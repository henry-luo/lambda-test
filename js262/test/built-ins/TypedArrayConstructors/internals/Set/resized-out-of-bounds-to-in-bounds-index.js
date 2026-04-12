

/*---
esid: sec-typedarraysetelement
description: >
  Index is validated after converting the right-hand side operand.
info: |
  TypedArraySetElement ( O, index, value )
    ...
    2. Otherwise, let numValue be ? ToNumber(value).
    3. If IsValidIntegerIndex(O, index) is true, then
      ...

features: [TypedArray, resizable-arraybuffer]
---*/

let rab = new ArrayBuffer(0, {maxByteLength: 1});
let ta = new Int8Array(rab);


let index = 0;

let value = {
  valueOf() {
    
    rab.resize(1);
    return 100;
  }
};

assert.sameValue(ta.length, 0);

ta[index] = value;

assert.sameValue(ta.length, 1);
assert.sameValue(ta[0], 100);



/*---
esid: sec-%typedarray%.prototype.subarray
description: >
  Result has the correct byteOffset when input is initially out-of-bounds.
info: |
  %TypedArray%.prototype.subarray ( start, end )

  ...
  13. Let srcByteOffset be O.[[ByteOffset]].
  14. Let beginByteOffset be srcByteOffset + (startIndex × elementSize).
  15. If O.[[ArrayLength]] is auto and end is undefined, then
    a. Let argumentsList be « buffer, 𝔽(beginByteOffset) ».
  16.
    ...
    e. Let newLength be max(endIndex - startIndex, 0).
    f. Let argumentsList be « buffer, 𝔽(beginByteOffset), 𝔽(newLength) ».
  17. Return ? TypedArraySpeciesCreate(O, argumentsList).
features: [TypedArray, resizable-arraybuffer]
---*/

let rab = new ArrayBuffer(10, {maxByteLength: 10});

let autoLength = new Int8Array(rab, 4);
let withLength = new Int8Array(rab, 4, 2);

let start = {
  valueOf() {
    
    rab.resize(10);
    return 1;
  }
};


rab.resize(0);

let resultAutoLength = autoLength.subarray(start);
assert.sameValue(resultAutoLength.byteOffset, 4);
assert.sameValue(resultAutoLength.length, 6);


rab.resize(0);

let resultWithLength = withLength.subarray(start);
assert.sameValue(resultWithLength.byteOffset, 4);
assert.sameValue(resultWithLength.length, 0);

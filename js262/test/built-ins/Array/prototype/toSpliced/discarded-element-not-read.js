

/*---
esid: sec-array.prototype.toSpliced
description: Array.prototype.toSpliced does not Get the discarded elements in the original array
info: |
  22.1.3.25 Array.prototype.toSpliced (start, deleteCount , ...items )

  ...
  3. Let relativeStart be ? ToIntegerOrInfinity(start).
  ...
  6. Else, let actualStart be min(relativeStart, len).
  ...
  8. If start is not present, then
    a. Let actualDeleteCount be 0.
  9. Else if deleteCount is not present, then
    a. Let actualDeleteCount be len - actualStart.
  10. Else,
    a. Let dc be ? ToIntegerOrInfinity(deleteCount).
    b. Let actualDeleteCount be the result of clamping dc between 0 and len - actualStart.
  11. Let newLen be len + insertCount - actualDeleteCount.
  ...
  15. Let r be actualStart + actualDeleteCount.
  ...
  18. Repeat, while i < newLen,
    a. Let Pi be ! ToString(𝔽(i)).
    b. Let from be ! ToString(𝔽(r)).
    c. Let fromValue be ? Get(O, from).
    d. Perform ! CreateDataPropertyOrThrow(A, Pi, fromValue).
    e. Set i to i + 1.
    f. Set r to r + 1.

features: [change-array-by-copy]
includes: [compareArray.js]
---*/

var arrayLike = {
  0: "a",
  1: "b",
  get 2() { throw new Test262Error(); },
  3: "c",
  length: 4,
};


var result = Array.prototype.toSpliced.call(arrayLike, 2, 1);
assert.compareArray(result, ["a", "b", "c"]);

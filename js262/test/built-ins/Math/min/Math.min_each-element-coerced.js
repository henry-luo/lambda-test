

/*---
esid: sec-math.min
description: Call ToNumber on each element of params
info: |
    2. For each element arg of args, do
        Let n be ? ToNumber(arg).
        Append n to coerced.
---*/

let valueOf_calls = 0;

const n = {
  valueOf: function() {
    valueOf_calls++;
  }
};
Math.min(NaN, n);
assert.sameValue(valueOf_calls, 1);

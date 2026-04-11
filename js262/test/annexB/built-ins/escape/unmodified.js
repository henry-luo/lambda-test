

/*---
esid: sec-escape-string
es6id: B.2.1.1
description: Do not escape a specific set of characters
info: |
    [...]
    5. Repeat, while k < length,
       a. Let char be the code unit (represented as a 16-bit unsigned integer)
          at index k within string.
       b. If char is one of the code units in
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@*_+-./",
          then
          i. Let S be a String containing the single code unit char.
       [...]
---*/

var passthrough = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@*_+-./';

assert.sameValue(escape(passthrough), passthrough);

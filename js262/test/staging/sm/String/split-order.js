

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-String-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1287521;
var summary = 'String.prototype.split should call ToUint32(limit) before ToString(separator).';

print(BUGNUMBER + ": " + summary);

var log = [];
"abba".split({
  toString() {
    log.push("separator-tostring");
    return "b";
  }
}, {
  valueOf() {
    log.push("limit-valueOf");
    return 0;
  }
});

assert.sameValue(log.join(","), "limit-valueOf,separator-tostring");


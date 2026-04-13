

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-String-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 918987;
var summary = 'String.prototype.normalize - normalize no String object';

print(BUGNUMBER + ": " + summary);

function test() {
  var myobj = {
    toString: () => "a\u0301",
    normalize: String.prototype.normalize
  };
  assert.sameValue(myobj.normalize(), "\u00E1");
}

if ("normalize" in String.prototype) {
  
  test();
}


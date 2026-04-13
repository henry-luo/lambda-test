

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-RegExp-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 887016;
var summary = "RegExpExec should throw if exec property of non-RegExp is not callable";

print(BUGNUMBER + ": " + summary);

for (var exec of [null, 0, false, undefined, ""]) {
  
  var re = /a/;
  re.exec = exec;
  RegExp.prototype[Symbol.match].call(re, "foo");

  
  assertThrowsInstanceOf(() => RegExp.prototype[Symbol.match].call({ exec }, "foo"),
                         TypeError);
}




/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-RegExp-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var re = /a/;
var newRe = Reflect.construct(RegExp, [re], Object.defineProperty(function(){}.bind(null), "prototype", {
  get() {
    re.compile("b");
    return RegExp.prototype;
  }
}));
assert.sameValue(newRe.source, "a");


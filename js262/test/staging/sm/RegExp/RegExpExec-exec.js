

/*---
description: |
  RegExpExec should throw if exec property of non-RegExp is not callable
info: bugzilla.mozilla.org/show_bug.cgi?id=887016
esid: pending
---*/

for (var exec of [null, 0, false, undefined, ""]) {
  
  var re = /a/;
  re.exec = exec;
  RegExp.prototype[Symbol.match].call(re, "foo");

  
  assert.throws(TypeError, () => RegExp.prototype[Symbol.match].call({ exec }, "foo"));
}

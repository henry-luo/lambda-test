

/*---
description: |
  RegExp.prototype.test should update lastIndex to correct position even if pattern starts with .*
info: bugzilla.mozilla.org/show_bug.cgi?id=1322035
esid: pending
---*/

var regExp = /.*x?/g;
regExp.test('12345');
assert.sameValue(regExp.lastIndex, 5);

regExp = /.*x*/g;
regExp.test('12345');
assert.sameValue(regExp.lastIndex, 5);

regExp = /.*()/g;
regExp.test('12345');
assert.sameValue(regExp.lastIndex, 5);

regExp = /.*(x|)/g;
regExp.test('12345');
assert.sameValue(regExp.lastIndex, 5);

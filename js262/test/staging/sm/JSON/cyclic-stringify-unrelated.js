

/*---
description: |
  JSON.stringify shouldn't use context-wide cycle detection
info: bugzilla.mozilla.org/show_bug.cgi?id=1197097
esid: pending
---*/

var arr;


arr = [{}];
assert.sameValue(JSON.stringify(arr, function(k, v) {
  assert.sameValue(JSON.stringify(arr), "[{}]");
  return v;
}), "[{}]");


arr = [{
  toString: function() {
    var s = JSON.stringify(arr);
    assert.sameValue(s, "[{}]");
    return s;
  }
}];
assert.sameValue(arr.join(), "[{}]");

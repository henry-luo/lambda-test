

/*---
description: |
  |new| on a cross-compartment wrapper to a non-constructor shouldn't assert
info: bugzilla.mozilla.org/show_bug.cgi?id=1178653
esid: pending
---*/

var g = $262.createRealm().global;

var otherStr = new g.String("foo");
assert.sameValue(otherStr instanceof g.String, true);
assert.sameValue(otherStr.valueOf(), "foo");


assert.throws(TypeError, function() {
  var constructor = g.parseInt;
  new constructor();
});

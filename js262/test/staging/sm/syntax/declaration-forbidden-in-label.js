

/*---
description: |
  Properly implement the spec's distinctions between StatementListItem and Statement grammar productions and their uses
info: bugzilla.mozilla.org/show_bug.cgi?id=1288459
esid: pending
---*/

assert.throws(SyntaxError, () => Function("a: let x;"));
assert.throws(SyntaxError, () => Function("b: const y = 3;"));
assert.throws(SyntaxError, () => Function("c: class z {};"));

assert.throws(SyntaxError, () => Function("'use strict'; d: function w() {};"));


Function("e: function x() {};");

assert.throws(SyntaxError, () => Function("f: function* y() {}"));

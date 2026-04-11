

/*---
description: |
  Valgrind errors in jsemit.cpp
info: bugzilla.mozilla.org/show_bug.cgi?id=410852
esid: pending
---*/

assert.throws(SyntaxError, function() {
  eval('function(){if(t)');
});

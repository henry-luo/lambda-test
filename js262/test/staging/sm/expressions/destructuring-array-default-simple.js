

/*---
includes: [sm/non262-expressions-shell.js]
description: |
  Array destructuring with various default values in various context - simple literal
info: bugzilla.mozilla.org/show_bug.cgi?id=1184922
esid: pending
---*/

testDestructuringArrayDefault("'foo'");
testDestructuringArrayDefault("`foo`");
testDestructuringArrayDefault("func`foo`");

testDestructuringArrayDefault("/foo/");

testDestructuringArrayDefault("{}");
testDestructuringArrayDefault("[]");

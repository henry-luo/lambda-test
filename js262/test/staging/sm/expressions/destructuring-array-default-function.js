

/*---
includes: [sm/non262-expressions-shell.js]
description: |
  Array destructuring with various default values in various context - function expression
info: bugzilla.mozilla.org/show_bug.cgi?id=1184922
esid: pending
---*/

testDestructuringArrayDefault("function f() {}");
testDestructuringArrayDefault("function* g() {}");
testDestructuringArrayDefault("() => {}");

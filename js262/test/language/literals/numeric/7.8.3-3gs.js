

/*---
es5id: 7.8.3-3gs
description: >
    Strict Mode - octal extension is forbidden in strict mode (after a
    hex number is assigned to a variable from an eval)
flags: [onlyStrict]
---*/

var a;
assert.throws(SyntaxError, function() {
  eval("a = 0x1;a = 01;");
});

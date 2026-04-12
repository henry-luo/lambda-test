

/*---
es6id: 13.1
description: >
    redeclaration outermost:
    allowed to redeclare function declaration with function declaration
---*/
function f() { return 1; } function f() { return 2; }

assert.sameValue(f(), 2);

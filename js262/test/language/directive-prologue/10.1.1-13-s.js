

/*---
es5id: 10.1.1-13-s
description: >
    Strict Mode - Eval code is strict eval code with a Use Strict
    Directive at the end of the block
flags: [noStrict]
---*/

        eval("var public = 1; var anotherVariableNotReserveWord = 2; 'use strict';");

assert.sameValue(public, 1, 'public');
assert.sameValue(anotherVariableNotReserveWord, 2, 'anotherVariableNotReserveWord');

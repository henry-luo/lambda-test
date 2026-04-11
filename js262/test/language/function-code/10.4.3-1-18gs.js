

/*---
es5id: 10.4.3-1-18gs
description: >
    Strict - checking 'this' from a global scope (eval includes strict
    directive prologue)
flags: [noStrict]
---*/

if (eval("\"use strict\";\nthis") !== this) {
    throw "'this' had incorrect value!";
}

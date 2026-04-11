

/*---
es5id: 10.4.3-1-100gs
description: >
    Strict Mode - checking 'this' (strict function passed as arg to
    String.prototype.replace)
---*/

var x = 3;

function f() {
    "use strict";
    x = this;
    return "a";
}
if (("ab".replace("b", f)!=="aa") || (x!==undefined)) {
    throw "'this' had incorrect value!";
}

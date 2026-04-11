

/*---
es5id: 11.13.2-1-s
description: >
    ReferenceError is thrown if the LeftHandSideExpression of a Compound
    Assignment operator(*=) evaluates to an unresolvable reference
---*/


assert.throws(ReferenceError, function() {
            eval("_11_13_2_1 *= 1;");
});

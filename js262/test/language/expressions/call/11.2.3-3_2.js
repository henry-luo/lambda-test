

/*---
es5id: 11.2.3-3_2
description: >
    Call arguments are evaluated before the check is made to see if
    the object is actually callable (FunctionExpression)
---*/

    var fooCalled = false;
    var foo = function (){ fooCalled = true; } 
    
    var o = { }; 
assert.throws(TypeError, function() {
        o.bar( foo() );
        throw new Test262Error("o.bar does not exist!");
});
assert.sameValue(fooCalled, true, 'fooCalled');

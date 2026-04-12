

/*---
es5id: 11.2.3-3_1
description: >
    Call arguments are evaluated before the check is made to see if
    the object is actually callable (FunctionDeclaration)
---*/

    var fooCalled = false;
    function foo(){ fooCalled = true; } 
    
    var o = { }; 
assert.throws(TypeError, function() {
        o.bar( foo() );
        throw new Test262Error("o.bar does not exist!");
});
assert.sameValue(fooCalled, true, 'fooCalled');

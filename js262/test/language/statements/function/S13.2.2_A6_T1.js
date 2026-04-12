

/*---
info: |
    When the [[Construct]] property for a Function object F is called:
    A new native ECMAScript object is created.
    Invoke the [[Call]] property of F, providing just created native ECMAScript object as the this value and providing the argument
    list passed into [[Construct]] as the argument values.
    If Type( [[Call]] returned) is not Object then return passed as this into [[Call]] object
es5id: 13.2.2_A6_T1
description: Declaring a function with "__func = function(arg)"
---*/

var __FOO, __BAR, __func, __obj;

__FOO="fooValue";
__BAR="barValue";

__func = function(arg){
	this.foo=arg;
    return 0;
	this.bar=arguments[1];
};

__obj = new __func(__FOO, __BAR);


if (__obj.foo!==__FOO) {
	throw new Test262Error('#1: __obj.foo === __FOO. Actual: __obj.foo==='+__obj.foo);
}


if (__obj.bar!==undefined) {
	throw new Test262Error('#2: __obj.bar === undefined. Actual: __obj.bar==='+__obj.bar);
}


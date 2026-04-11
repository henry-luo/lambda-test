

/*---
info: FunctionExpession within a "for-in" Expression is allowed
es5id: 12.6.4_A14_T2
description: "Using \"function __func(){return {a:1};}()\" as Expession"
---*/

var x;


for(x in function __func(){return {a:1};}()){
    var __reached = x;
};


if (__reached !== "a") {
	throw new Test262Error('#2: function expession inside of for-in expression allowed');
}


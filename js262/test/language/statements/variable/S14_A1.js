

/*---
info: FunctionExpression must be localed in a reacheable fragment of the program
es5id: 14_A1
description: Declaring a function within an "if" Expression
---*/

var THERE = "I'm there";
var HERE = "I'm here";


if ( __func !== undefined) {
	throw new Test262Error('#1: __func === undefined. Actual:  __func ==='+ __func  );
}


if (true){
    var __func = function(){return HERE;};
} else {
    var __func = function (){return THERE;};
};


if (__func() !== HERE) {
	throw new Test262Error('#2: __func() === HERE. Actual:  __func() ==='+ __func()  );
}


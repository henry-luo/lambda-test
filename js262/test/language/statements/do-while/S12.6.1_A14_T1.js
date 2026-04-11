

/*---
info: FunctionExpression within a "do-while" Expression is allowed
es5id: 12.6.1_A14_T1
description: >
    Using FunctionExpression "function __func(){return 0;}" as an
    Expression
---*/


do{
   var __reached = 1;
   break;
}while(function __func(){return 0;});


if (__reached !== 1) {
	throw new Test262Error('#2: function expession inside of do-while expression is allowed');
}


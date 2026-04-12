

/*---
info: |
    Only Function objects implement [[HasInstance]] and can be proper
    ShiftExpression for the "instanceof" operator consequently
es5id: 11.8.6_A6_T4
description: Checking if RelationalExpression is object
---*/

var MyFunct = function(){};
var __my__funct = new MyFunct;


if (!(__my__funct instanceof MyFunct)){
	throw new Test262Error('#1 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
}


if (__my__funct instanceof Function){
	throw new Test262Error('#2 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
}


if (!(__my__funct instanceof Object)){
	throw new Test262Error('#3 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
}


try{
	__my__funct instanceof __my__funct;
	throw new Test262Error('#4 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
}
catch(e){  
	if (e instanceof TypeError !== true) {
      throw new Test262Error('#4 Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
	}
}

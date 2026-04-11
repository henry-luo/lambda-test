

/*---
info: |
    Only Function objects implement [[HasInstance]] and can be proper
    ShiftExpression for the "instanceof" operator consequently
es5id: 11.8.6_A6_T3
description: Checking if RelationalExpression is function
---*/

function MyFunct(){return 0};


if (MyFunct instanceof MyFunct){
	throw new Test262Error('#1 function MyFunct(){return 0}; MyFunct instanceof MyFunct === false');
}


if (MyFunct instanceof Function !== true){
	throw new Test262Error('#2 function MyFunct(){return 0}; MyFunct instanceof Function === true');
}


if (MyFunct instanceof Object !== true){
	throw new Test262Error('#3 function MyFunct(){return 0}; MyFunct instanceof Object === true');
}

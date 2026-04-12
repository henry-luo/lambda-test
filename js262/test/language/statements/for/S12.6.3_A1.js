

/*---
info: |
    The "for {;;}" for Statement with empty expressions is allowed and leads
    to performing an infinite loop
es5id: 12.6.3_A1
description: Breaking an infinite loop by throwing exception
---*/

var __in__for = 0;


try {
	for (;;){
    
    if(++__in__for>100)throw 1;
}
} catch (e) {
	if (e !== 1) {
		throw new Test262Error('#1: for {;;} is admitted and leads to infinite loop');
	}
}


if (__in__for !== 101) {
	throw new Test262Error('#2: __in__for === 101. Actual:  __in__for ==='+ __in__for  );
}


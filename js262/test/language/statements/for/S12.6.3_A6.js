

/*---
info: |
    While evaluating "for ( ;  ; Expression) Statement", Statement is
    evaluated first and then Expression is evaluated
es5id: 12.6.3_A6
description: Using "(function(){throw "SecondExpression";})()" as an Expression
---*/


try {
	for(;;(function(){throw "SecondExpression";})()){
        var __in__for = "reached";
    }
    throw new Test262Error('#1: (function(){throw "SecondExpression"}() lead to throwing exception');
} catch (e) {
	if (e !== "SecondExpression") {
		throw new Test262Error('#1: When for ( ;  ; Expression) Statement is evaluated Statement evaluates first then Expression evaluates');
	}
}


if (__in__for !== "reached") {
	throw new Test262Error('#2: __in__for === "reached". Actual:  __in__for ==='+ __in__for  );
}




/*---
info: |
    While evaluating "for (ExpressionNoIn ;  ; Expression) Statement",
    Statement is evaulated first
es5id: 12.6.3_A2.1
description: Using "(function(){throw "NoInExpression"})()" as ExpressionNoIn
---*/


try {
	for((function(){throw "NoInExpression"})(); ;(function(){throw "SecondExpression"})()) {
		throw "Statement";
	}
	throw new Test262Error('#1: (function(){throw "NoInExpression"})() lead to throwing exception');
} catch (e) {
	if (e !== "NoInExpression") {
		throw new Test262Error('#2: When for (ExpressionNoIn ;  ; Expression) Statement is evaluated NoInExpression evaluates first');
	}
}




/*---
info: |
    When the production "IfStatement: if ( Expression ) Statement else
    Statement" is evaluated, Expression is evaluated first
es5id: 12.5_A3
description: The Expression is "(function(){throw 1})()"
---*/


try {
	if ((function(){throw 1})()) abracadabra
} catch (e) {
	if (e !== 1) {
		throw new Test262Error('#1: Exception === 1. Actual:  Exception ==='+ e);
	}
}


try {
	if ((function(){throw 1})()) abracadabra; else blablachat;
} catch (e) {
	if (e !== 1) {
		throw new Test262Error('#2: Exception === 1. Actual:  Exception ==='+ e);
	}
}




/*---
info: |
    When the production "IfStatement: if ( Expression ) Statement else
    Statement" is evaluated, Statement(s) is(are) evaluated second
es5id: 12.5_A4
description: The first statement is "(function(){throw "instatement"})()"
---*/


try {
	if (true) (function(){throw "instatement"})();
	throw new Test262Error("#1 failed")
} catch (e) {
	if (e !== "instatement") {
		throw new Test262Error('#1: Exception === "instatement". Actual:  Exception ==='+ e);
	}
}


try {
	if (false) (function(){throw "truebranch"})(); (function(){throw "missbranch"})();
	throw new Test262Error("#2 failed")
} catch (e) {
	if (e !== "missbranch") {
		throw new Test262Error('#2: Exception === "missbranch". Actual:  Exception ==='+ e);
	}
}


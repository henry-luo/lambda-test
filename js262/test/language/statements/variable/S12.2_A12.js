

/*---
info: VariableDeclaration within "do-while" loop is allowed
es5id: 12.2_A12
description: Declaring variable within "do-while" statement
---*/


try {
	x=x;
} catch (e) {
	throw new Test262Error('#1: Declaration variable inside "do-while" statement is admitted');
}


do var x; while (false);

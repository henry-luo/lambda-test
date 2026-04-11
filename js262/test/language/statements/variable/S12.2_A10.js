

/*---
info: "\"var\" statement within \"for\" statement is allowed"
es5id: 12.2_A10
description: Declaring variable within a "for" IterationStatement
---*/


try {
	__ind=__ind;
} catch (e) {
    throw new Test262Error('#1: var inside "for" is admitted '+e.message);
}


for (var __ind;;){
    break;
}

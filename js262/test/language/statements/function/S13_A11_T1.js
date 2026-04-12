

/*---
info: |
    Since arguments property has attribute { DontDelete }, only its elements
    can be deleted
es5id: 13_A11_T1
description: Returning result of "delete arguments"
flags: [noStrict]
---*/

function __func(){ return delete arguments;}


if (__func("A","B",1,2)) {
	throw new Test262Error('#1: arguments property has attribute { DontDelete }');
}


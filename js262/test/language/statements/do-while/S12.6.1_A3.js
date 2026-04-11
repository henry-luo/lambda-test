

/*---
info: |
    When the production "do Statement while ( Expression )" is evaluated,
    then (normal, V, empty) is returned
es5id: 12.6.1_A3
description: Using eval "eval("do __in__do=1; while (false)")"
---*/

var __evaluated, __in__do;

__evaluated = eval("do __in__do=1; while (false)");


if (__in__do !== 1) {
	throw new Test262Error('#1: __in__do === 1. Actual:  __in__do ==='+ __in__do  );
}


if (__evaluated !== 1) {
	throw new Test262Error('#2: __evaluated === 1. Actual:  __evaluated ==='+ __evaluated  );
}


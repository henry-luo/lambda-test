

/*---
info: TypeError is subclass of Error from instanceof operator point of view
es5id: 11.8.6_A5_T2
description: Checking TypeError case
---*/

var __t__err = new TypeError;


if (!(__t__err instanceof Error)) {
	throw new Test262Error('#1: TypeError is subclass of Error from instanceof operator point of view');
}


if (!(__t__err instanceof TypeError)) {
	throw new Test262Error('#2: TypeError is subclass of Error from instanceof operator point of view');
}


var err__t__ = TypeError('failed');


if (!(err__t__ instanceof Error)) {
	throw new Test262Error('#3: TypeError is subclass of Error from instanceof operator point of view');
}


if (!(err__t__ instanceof TypeError)) {
	throw new Test262Error('#4: TypeError is subclass of Error from instanceof operator point of view');
}

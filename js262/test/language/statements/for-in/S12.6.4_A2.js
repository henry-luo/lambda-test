

/*---
info: "\"for(key in null)\" Expression is allowed"
es5id: 12.6.4_A2
description: Checking if execution of "for(key in null)" passes
---*/


try {
	for(__key in null){
	    var key=__key;
	};
} catch (e) {
	throw new Test262Error('#1: "for(__key in null){}" does not lead to throwing exception');
}


if (key!==undefined) {
	throw new Test262Error('#2: key === undefined. Actual: key ==='+key);
}


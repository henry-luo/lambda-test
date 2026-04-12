

/*---
info: The Undefined type has one value, called undefined
es5id: 8.1_A1_T2
description: Check typeof(undefined) and typeof(void 0)
---*/


if (!(typeof(undefined) === "undefined")) { 
	ERROR('#1: typeof(undefined) === "undefined". Actual: ' + (typeof(undefined)));  
} 


if (!(typeof(void 0) === "undefined")) {  
	ERROR('#2: typeof(void 0) === "undefined". Actual: ' + (typeof(void 0)));  
}


if (!(undefined === void 0)) {  
	ERROR('#3: undefined === void 0');  
}

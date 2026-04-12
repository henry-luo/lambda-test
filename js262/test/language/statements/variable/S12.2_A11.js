

/*---
info: When using property attributes, {ReadOnly} is not used
es5id: 12.2_A11
description: Changing variable value using property attributes
---*/


this['__declared__var'] = "baloon";
if (this['__declared__var'] !== "baloon") {
	throw new Test262Error('#1: this[\'__declared__var\'] === "baloon". Actual:  this[\'__declared__var\'] ==='+ this['__declared__var']  );
}


if (__declared__var !== "baloon") {
	throw new Test262Error('#2: __declared__var === "baloon". Actual:  __declared__var ==='+ __declared__var  );
}


var __declared__var;

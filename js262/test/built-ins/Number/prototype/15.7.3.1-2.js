

/*---
es5id: 15.7.3.1-2
description: Number.prototype, initial value is the Number prototype object
---*/


assert.sameValue(Object.getPrototypeOf(new Number(42)), Number.prototype, 'Object.getPrototypeOf(new Number(42))');

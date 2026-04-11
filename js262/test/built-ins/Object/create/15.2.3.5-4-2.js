

/*---
es5id: 15.2.3.5-4-2
description: Object.create - 'Properties' is undefined
---*/

var newObj = Object.create({}, undefined);

assert((newObj instanceof Object), '(newObj instanceof Object) !== true');

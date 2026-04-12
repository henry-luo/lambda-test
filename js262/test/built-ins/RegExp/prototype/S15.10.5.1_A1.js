

/*---
info: The RegExp has property prototype
es5id: 15.10.5.1_A1
description: Checking RegExp.prototype property
---*/
assert.sameValue(RegExp.hasOwnProperty('prototype'), true, 'RegExp.hasOwnProperty(\'prototype\') must return true');



/*---
info: |
    The RegExp.prototype.exec.length property does not have the attribute
    DontDelete
es5id: 15.10.6.2_A9
description: >
    Checking if deleting the RegExp.prototype.exec.length property
    fails
---*/
assert.sameValue(
  RegExp.prototype.exec.hasOwnProperty('length'),
  true,
  'RegExp.prototype.exec.hasOwnProperty(\'length\') must return true'
);

assert.sameValue(
  delete RegExp.prototype.exec.length,
  true,
  'The value of `delete RegExp.prototype.exec.length` is expected to be true'
);

assert.sameValue(
  RegExp.prototype.exec.hasOwnProperty('length'),
  false,
  'RegExp.prototype.exec.hasOwnProperty(\'length\') must return false'
);


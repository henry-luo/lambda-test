

/*---
info: |
    The String.prototype.slice.length property does not have the attribute
    DontDelete
es5id: 15.5.4.13_A9
description: >
    Checking if deleting the String.prototype.slice.length property
    fails
---*/


if (!(String.prototype.slice.hasOwnProperty('length'))) {
  throw new Test262Error('#0: String.prototype.slice.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.slice.hasOwnProperty('length'));
}


if (!delete String.prototype.slice.length) {
  throw new Test262Error('#1: delete String.prototype.slice.length return true');
}


if (String.prototype.slice.hasOwnProperty('length')) {
  throw new Test262Error('#2: delete String.prototype.slice.length; String.prototype.slice.hasOwnProperty(\'length\') return false. Actual: ' + String.prototype.slice.hasOwnProperty('length'));
}


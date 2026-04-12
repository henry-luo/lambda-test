

/*---
info: |
    The String.prototype.toUpperCase.length property does not have the
    attribute DontDelete
es5id: 15.5.4.18_A9
description: >
    Checking if deleting the String.prototype.toUpperCase.length
    property fails
---*/


if (!(String.prototype.toUpperCase.hasOwnProperty('length'))) {
  throw new Test262Error('#0: String.prototype.toUpperCase.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.toUpperCase.hasOwnProperty('length'));
}


if (!delete String.prototype.toUpperCase.length) {
  throw new Test262Error('#1: delete String.prototype.toUpperCase.length return true');
}


if (String.prototype.toUpperCase.hasOwnProperty('length')) {
  throw new Test262Error('#2: delete String.prototype.toUpperCase.length; String.prototype.toUpperCase.hasOwnProperty(\'length\') return false. Actual: ' + String.prototype.toUpperCase.hasOwnProperty('length'));
}


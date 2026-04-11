

/*---
info: |
    The String.prototype.toLocaleUpperCase.length property does not have the
    attribute DontDelete
es5id: 15.5.4.19_A9
description: >
    Checking if deleting the String.prototype.toLocaleUpperCase.length
    property fails
---*/


if (!(String.prototype.toLocaleUpperCase.hasOwnProperty('length'))) {
  throw new Test262Error('#0: String.prototype.toLocaleUpperCase.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.toLocaleUpperCase.hasOwnProperty('length'));
}


if (!delete String.prototype.toLocaleUpperCase.length) {
  throw new Test262Error('#1: delete String.prototype.toLocaleUpperCase.length return true');
}


if (String.prototype.toLocaleUpperCase.hasOwnProperty('length')) {
  throw new Test262Error('#2: delete String.prototype.toLocaleUpperCase.length; String.prototype.toLocaleUpperCase.hasOwnProperty(\'length\') return false. Actual: ' + String.prototype.toLocaleUpperCase.hasOwnProperty('length'));
}


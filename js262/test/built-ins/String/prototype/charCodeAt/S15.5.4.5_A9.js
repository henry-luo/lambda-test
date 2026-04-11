

/*---
info: |
    The String.prototype.charCodeAt.length property does not have the
    attribute DontDelete
es5id: 15.5.4.5_A9
description: >
    Checking if deleting the String.prototype.charCodeAt.length
    property fails
---*/


if (!(String.prototype.charCodeAt.hasOwnProperty('length'))) {
  throw new Test262Error('#0: String.prototype.charCodeAt.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.charCodeAt.hasOwnProperty('length'));
}


if (!delete String.prototype.charCodeAt.length) {
  throw new Test262Error('#1: delete String.prototype.charCodeAt.length return true');
}


if (String.prototype.charCodeAt.hasOwnProperty('length')) {
  throw new Test262Error('#2: delete String.prototype.charCodeAt.length; String.prototype.charCodeAt.hasOwnProperty(\'length\') return false. Actual: ' + String.prototype.charCodeAt.hasOwnProperty('length'));
}


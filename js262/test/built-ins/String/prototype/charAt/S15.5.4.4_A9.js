

/*---
info: |
    The String.prototype.charAt.length property does not have the attribute
    DontDelete
es5id: 15.5.4.4_A9
description: >
    Checking if deleting the String.prototype.charAt.length property
    fails
---*/


if (!(String.prototype.charAt.hasOwnProperty('length'))) {
  throw new Test262Error('#0: String.prototype.charAt.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.charAt.hasOwnProperty('length'));
}


if (!delete String.prototype.charAt.length) {
  throw new Test262Error('#1: delete String.prototype.charAt.length return true');
}


if (String.prototype.charAt.hasOwnProperty('length')) {
  throw new Test262Error('#2: delete String.prototype.charAt.length; String.prototype.charAt.hasOwnProperty(\'length\') return false. Actual: ' + String.prototype.charAt.hasOwnProperty('length'));
}




/*---
info: |
    The String.prototype.toLocaleLowerCase.length property does not have the
    attribute DontDelete
es5id: 15.5.4.17_A9
description: >
    Checking if deleting the String.prototype.toLocaleLowerCase.length
    property fails
---*/


if (!(String.prototype.toLocaleLowerCase.hasOwnProperty('length'))) {
  throw new Test262Error('#0: String.prototype.toLocaleLowerCase.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.toLocaleLowerCase.hasOwnProperty('length'));
}


if (!delete String.prototype.toLocaleLowerCase.length) {
  throw new Test262Error('#1: delete String.prototype.toLocaleLowerCase.length return true');
}


if (String.prototype.toLocaleLowerCase.hasOwnProperty('length')) {
  throw new Test262Error('#2: delete String.prototype.toLocaleLowerCase.length; String.prototype.toLocaleLowerCase.hasOwnProperty(\'length\') return false. Actual: ' + String.prototype.toLocaleLowerCase.hasOwnProperty('length'));
}




/*---
info: |
    The String.prototype.match.length property does not have the attribute
    DontDelete
es5id: 15.5.4.10_A9
description: >
    Checking if deleting the String.prototype.match.length property
    fails
---*/


if (!(String.prototype.match.hasOwnProperty('length'))) {
  throw new Test262Error('#0: String.prototype.match.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.match.hasOwnProperty('length'));
}


if (!delete String.prototype.match.length) {
  throw new Test262Error('#1: delete String.prototype.match.length return true');
}


if (String.prototype.match.hasOwnProperty('length')) {
  throw new Test262Error('#2: delete String.prototype.match.length; String.prototype.match.hasOwnProperty(\'length\') return false. Actual: ' + String.prototype.match.hasOwnProperty('length'));
}


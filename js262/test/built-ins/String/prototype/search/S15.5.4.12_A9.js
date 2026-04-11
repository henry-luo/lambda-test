

/*---
info: |
    The String.prototype.search.length property does not have the attribute
    DontDelete
es5id: 15.5.4.12_A9
description: >
    Checking if deleting the String.prototype.search.length property
    fails
---*/


if (!(String.prototype.search.hasOwnProperty('length'))) {
  throw new Test262Error('#0: String.prototype.search.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.search.hasOwnProperty('length'));
}


if (!delete String.prototype.search.length) {
  throw new Test262Error('#1: delete String.prototype.search.length return true');
}


if (String.prototype.search.hasOwnProperty('length')) {
  throw new Test262Error('#2: delete String.prototype.search.length; String.prototype.search.hasOwnProperty(\'length\') return false. Actual: ' + String.prototype.search.hasOwnProperty('length'));
}




/*---
info: |
    A regular expression literal is an input element that is converted to
    a RegExp object when it is scanned
es5id: 7.8.5_A4.1
description: "Check ((/(?:)/ instanceof RegExp) === true)"
---*/


if ((/(?:)/ instanceof RegExp) !== true) {
  throw new Test262Error('#1: (/(?:)/ instanceof RegExp) === true. Actual: ' + ((/(?:)/ instanceof RegExp)));
}

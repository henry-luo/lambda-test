

/*---
info: String.prototype.search (regexp)
es5id: 15.5.4.12_A1_T4
description: Call search (regexp) without arguments
---*/


if ("".search() !== 0) {
  throw new Test262Error('#1: "".search() === 0. Actual: ' + ("".search()));
}

if ("--undefined--".search() != 0) {
  throw new Test262Error('#1: "--undefined--".search() === 0. Actual: ' + ("--undefined--".search()));
}


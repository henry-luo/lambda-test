

/*---
info: "RegularExpressionFlags :: IdentifierPart"
es5id: 7.8.5_A3.1_T1
description: "IdentifierPart :: g"
---*/


var regexp = /(?:)/g; 
if (regexp.global !== true) {
  throw new Test262Error('#1: var regexp = /(?:)/g; regexp.global === true. Actual: ' + (regexp.global));
}


if (regexp.ignoreCase !== false) {
  throw new Test262Error('#2: var regexp = /(?:)/g; regexp.ignoreCase === false. Actual: ' + (regexp.ignoreCase));
}


if (regexp.multiline !== false) {
  throw new Test262Error('#3: var regexp = /(?:)/g; regexp.multiline === false. Actual: ' + (regexp.multiline));
}

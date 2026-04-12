

/*---
info: "DecimalLiteral :: ExponentPart is incorrect"
es5id: 7.8.3_A4.1_T5
description: "ExponentPart :: e DecimalDigits"
---*/

assert.throws(ReferenceError, function() {
  e+1
});

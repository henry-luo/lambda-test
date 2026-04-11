

/*---
info: "DecimalLiteral :: ExponentPart is incorrect"
es5id: 7.8.3_A4.1_T4
description: "ExponentPart :: E DecimalDigits"
---*/

assert.throws(ReferenceError, function() {
  E-1
});

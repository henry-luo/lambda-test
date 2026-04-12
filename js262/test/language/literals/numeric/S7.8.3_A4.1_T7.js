

/*---
info: "DecimalLiteral :: ExponentPart is incorrect"
es5id: 7.8.3_A4.1_T7
description: "ExponentPart :: e 0"
---*/

assert.throws(ReferenceError, function() {
  e0
});

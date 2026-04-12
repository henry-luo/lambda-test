

/*---
info: "The MV of SignedInteger ::: + DecimalDigits is the MV of DecimalDigits"
es5id: 9.3.1_A14
description: Compare Number('+1234567890') with +('1234567890')
---*/
assert.sameValue(Number("+1234567890"), 1234567890, 'Number("+1234567890") must return 1234567890');

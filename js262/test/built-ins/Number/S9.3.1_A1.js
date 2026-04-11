

/*---
info: "The MV of StringNumericLiteral ::: [empty] is 0"
es5id: 9.3.1_A1
description: Number('') convert to Number by explicit transformation
---*/
assert.sameValue(Number(""), 0, 'Number("") must return 0');

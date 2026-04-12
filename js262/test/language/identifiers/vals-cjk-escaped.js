

/*---
info: |
    IdentifierName and ReservedWord are tokens that are interpreted according to the 
    Default Identifier Syntax given in Unicode Standard Annex #31, 
    Identifier and Pattern Syntax, with some small modifications.
esid: sec-names-and-keywords
description: Check CJK UNIFIED IDEOGRAPH range is correct.
---*/


var \u4e00 = 1;
assert.sameValue(一, 1);


var \u6c5f = 1;
assert.sameValue(江, 1);


var \u9fa5 = 1;
assert.sameValue(龥, 1);


var \u3400 = 1;
assert.sameValue(㐀, 1);


var \u362e = 1;
assert.sameValue(㘮, 1);


var \u4db5 = 1;
assert.sameValue(䶵, 1);

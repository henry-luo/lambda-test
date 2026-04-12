

/*---
info: |
    IdentifierName and ReservedWord are tokens that are interpreted according to the 
    Default Identifier Syntax given in Unicode Standard Annex #31, 
    Identifier and Pattern Syntax, with some small modifications.
esid: sec-names-and-keywords
description: Check CJK UNIFIED IDEOGRAPH range is correct.
---*/


var 一 = 1;
assert.sameValue(一, 1);


var 江 = 1;
assert.sameValue(江, 1);


var 龥 = 1;
assert.sameValue(龥, 1);


var 㐀 = 1;
assert.sameValue(㐀, 1);


var 㘮 = 1;
assert.sameValue(㘮, 1);


var 䶵 = 1;
assert.sameValue(䶵, 1);

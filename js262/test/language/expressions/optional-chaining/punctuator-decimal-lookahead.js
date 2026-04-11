

/*---
esid: prod-OptionalExpression
description: >
  ternary operation with decimal does not evaluate as optional chain 
info: |
  Punctuators
    OptionalChainingPunctuator::
      ?.[lookahead ∉ DecimalDigit]
features: [optional-chaining]
---*/

const value = true ?.30 : false;
assert.sameValue(.30, value);

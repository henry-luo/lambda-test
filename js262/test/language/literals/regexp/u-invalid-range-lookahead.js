

/*---
esid: sec-regular-expressions-patterns
es6id: B.1.4
description: Quantifiable assertions disallowed with `u` flag
info: |
    The `u` flag precludes quantifiable assertions (even when Annex B is
    honored)

    Term[U] ::
         [~U] QuantifiableAssertion Quantifier
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/.(?=.){2,3}/u;

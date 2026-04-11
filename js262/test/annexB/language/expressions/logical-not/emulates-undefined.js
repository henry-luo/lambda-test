

/*---
esid: sec-binary-logical-operators-runtime-semantics-evaluation
description: >
  ToBoolean returns `false` for [[IsHTMLDDA]] object.
info: |
  UnaryExpression : ! UnaryExpression

  1. Let expr be the result of evaluating UnaryExpression.
  2. Let oldValue be ! ToBoolean(? GetValue(expr)).
  3. If oldValue is true, return false.
  4. Return true.

  The [[IsHTMLDDA]] Internal Slot / Changes to ToBoolean

  1. If argument has an [[IsHTMLDDA]] internal slot, return false.
  2. Return true.
features: [IsHTMLDDA]
---*/

var IsHTMLDDA = $262.IsHTMLDDA;

assert(!IsHTMLDDA);
assert.sameValue(!!IsHTMLDDA, false);

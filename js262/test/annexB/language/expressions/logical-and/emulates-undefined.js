

/*---
esid: sec-binary-logical-operators-runtime-semantics-evaluation
description: >
  ToBoolean returns `false` for [[IsHTMLDDA]] object; rval is not evaluated.
info: |
  LogicalANDExpression : LogicalANDExpression && BitwiseORExpression

  1. Let lref be the result of evaluating LogicalANDExpression.
  2. Let lval be ? GetValue(lref).
  3. Let lbool be ! ToBoolean(lval).
  4. If lbool is false, return lval.

  The [[IsHTMLDDA]] Internal Slot / Changes to ToBoolean

  1. If argument has an [[IsHTMLDDA]] internal slot, return false.
  2. Return true.
features: [IsHTMLDDA]
---*/

var IsHTMLDDA = $262.IsHTMLDDA;

assert.sameValue(IsHTMLDDA && unresolved, IsHTMLDDA);

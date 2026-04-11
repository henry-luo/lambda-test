

/*---
esid: sec-labelled-statements-runtime-semantics-labelledevaluation
es6id: 13.13.14
description: Completion value when LabelledItem returns a "break" completion
info: |
  LabelledStatement : LabelIdentifier : LabelledItem

  1. Let label be the StringValue of LabelIdentifier.
  2. Append label as an element of labelSet.
  3. Let stmtResult be LabelledEvaluation of LabelledItem with argument
     labelSet.
  4. If stmtResult.[[Type]] is break and SameValue(stmtResult.[[Target]],
     label) is true, then
     a. Let stmtResult be NormalCompletion(stmtResult.[[Value]]).
---*/

assert.sameValue(eval('test262id: { 5; break test262id; 9; }'), 5);

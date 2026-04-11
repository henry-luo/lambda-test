

/*---
esid: sec-patterns
es6id: 21.2.1
description: Quantifiable assertions disallowed with `u` flag
info: |
    The `u` flag precludes the use of extended pattern characters irrespective
    of the presence of Annex B extensions.

    Term[U] ::
         [~U] ExtendedAtom
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/{/u;

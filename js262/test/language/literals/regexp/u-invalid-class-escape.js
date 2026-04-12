

/*---
esid: sec-patterns
es6id: 21.2.1
description: >
    ClassEscape does not recognize "class control" patterns
info: |
    ClassEscape[U] ::
        b
        [+U] -
        CharacterClassEscape
        CharacterEscape[?U]

    The `u` flag precludes the Annex B extension that enables this pattern.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/\c0/u;

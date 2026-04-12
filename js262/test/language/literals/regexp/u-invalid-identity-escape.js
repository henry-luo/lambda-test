

/*---
esid: sec-patterns
es6id: 21.2.1
description: Support for UnicodeIDContinue in IdentityEscape
info: |
    IdentityEscape[U] ::
        [+U] SyntaxCharacter
        [+U] /
        [~U] SourceCharacter but not UnicodeIDContinue

    The `u` flag precludes the use of characters in  UnicodeIDContinue
    irrespective of the presence of Annex B extensions.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/\M/u;

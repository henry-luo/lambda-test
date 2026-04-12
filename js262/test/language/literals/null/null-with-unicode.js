

/*---
esid: sec-keywords-and-reserved-words
description: >
  ReservedWord (null) cannot contain UnicodeEscapeSequence.
info: |
  Note 1

  Per 5.1.5, keywords in the grammar match literal sequences of specific SourceCharacter elements.
  A code point in a keyword cannot be expressed by a \ UnicodeEscapeSequence.
negative: 
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

n\u{75}ll;

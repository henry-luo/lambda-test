

/*---
esid: sec-grammar-notation
description: >
  The `let` contextual keyword must not contain Unicode escape sequences.
info: |
  Terminal symbols are shown
  in fixed width font, both in the productions of the grammars and throughout this
  specification whenever the text directly refers to such a terminal symbol. These
  are to appear in a script exactly as written. All terminal symbol code points
  specified in this way are to be understood as the appropriate Unicode code points
  from the Basic Latin range, as opposed to any similar-looking code points from
  other Unicode ranges.
flags: [noStrict]
---*/


this.let = 0;

l\u0065t 
a;


var a;

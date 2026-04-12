

/*---
esid: sec-%segmentsprototype%.containing
description: Verifies the cases which the input is unbreakable.
info: |
    %Segments.prototype%.containing ( index )

    8. Let startIndex be ! FindBoundary(segmenter, string, n, before).
    9. Let endIndex be ! FindBoundary(segmenter, string, n, after).

features: [Intl.Segmenter]
---*/

const granularities = [undefined, "grapheme", "word", "sentence"];

const inputs = [
    "a",
    " ",
    "\ud800\udc00", 
    "\ud800", 
    "\udc00", 
    "台", 
    "\u0301", 
    "a\u0301", 
    "ซิ่", 
    "𐂰",  
    "\uD83D\uDC4B\uD83C\uDFFB", 
    "\uD83D\uDC68\uD83C\uDFFB\u200D\uD83E\uDDB0", 
    "\u1102",  
    "\u1162",  
    "\u11A9",  
    "\u1102\u1162",  
    "\u1102\u1162\u11A9",  
    "\u1102\u1102",  
    "\u1102\u1102\u1162",  
    "\u1102\u1102\u1162\u11A9",  
    "\u1162\u1162",  
    "\u1162\u11A9",  
    "\u1102\u1162\u1162",  
    "\u11A9\u11A9",  
    "\u1102\u1162\u11A9\u11A9",  
];

granularities.forEach(
    function(granularity) {
      const segmenter = new Intl.Segmenter(undefined, {granularity});
      inputs.forEach(function(input) {
        const segment = segmenter.segment(input);
        for (let index = 0; index < input.length; index++) {
          const result = segment.containing(index);
          assert.sameValue(0, result.index);
          assert.sameValue(input, result.input);
          assert.sameValue(input, result.segment);
        }
      });
    });



/*---
esid: sec-%segmentsprototype%.containing
description: Checks the "containing" property of the %Segments.prototype% object.
info: |
    %Segments.prototype%.containing ( index )

    Unless specified otherwise in this document, the objects, functions, and constructors described in this standard are subject to the generic requirements and restrictions specified for standard built-in ECMAScript objects in the ECMAScript 2019 Language Specification, 10th edition, clause 17, or successor.

features: [Intl.Segmenter]
---*/

const segment = (new Intl.Segmenter()).segment("");
assert.sameValue(
  typeof segment.containing,
  "function",
  "typeof %Segments.prototype%.containing  is function"
);




/*---
es6id: 14.1.6
description: >
    The ExpectedArgumentCount of a FormalParameterList is the number of
    FormalParameters to the left of either the rest parameter or the first
    FormalParameter with an Initializer.
---*/
function af(...a) {}
function bf(a, ...b) {}

assert.sameValue(af.length, 0, "The value of `af.length` is `0`");
assert.sameValue(bf.length, 1, "The value of `bf.length` is `1`");

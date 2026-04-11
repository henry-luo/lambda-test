

/*---
esid: pending
description: |
  Doesn't access the "global" property of the constructed RegExp
info: |
  RegExp.prototype [ @@matchAll ] ( string )
    [...]
    4. Let C be ? SpeciesConstructor(R, %RegExp%).
    5. Let flags be ? ToString(? Get(R, "flags")).
    6. Let matcher be ? Construct(C, « R, flags »).
    [...]
    9. If flags contains "g", let global be true.
    10. Else, let global be false.
    [...]
features: [Symbol.matchAll, Symbol.species]
---*/

var regexp = /./;
regexp.constructor = {
  [Symbol.species]: function() {
    return Object.defineProperty(/./, 'global', {
      get() {
        throw new Test262Error();
      }
    });
  }
};

regexp[Symbol.matchAll]('');

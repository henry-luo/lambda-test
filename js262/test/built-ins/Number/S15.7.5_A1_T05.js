

/*---
info: |
    Number instances have no special properties beyond those
    inherited from the Number prototype object
es5id: 15.7.5_A1_T05
description: Checking property toFixed
---*/
assert.sameValue(
  (new Number()).hasOwnProperty("toFixed"),
  false,
  '(new Number()).hasOwnProperty("toFixed") must return false'
);

assert.sameValue(
  (new Number()).toFixed,
  Number.prototype.toFixed,
  'The value of (new Number()).toFixed is expected to equal the value of Number.prototype.toFixed'
);

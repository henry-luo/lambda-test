

/*---
info: |
    When the [[Delete]] method of O is called with property name P,
    and if O doesn't have a property with name P, return true
esid: sec-delete-operator-runtime-semantics-evaluation
description: >
    Try to delete not existent properties of O, but existent property
    of prototype
---*/

function Palette() {}
Palette.prototype = {
  red: 0xff0000,
  green: 0x00ff00,
};
var __palette = new Palette();


if (__palette.red !== 0xff0000) {
  throw new Test262Error(
    '#1: function Palette(){}; Palette.prototype = {red:0xFF0000, green:0x00FF00}; __palette = new Palette; __palette.red === 0xFF0000. Actual: ' +
    __palette.red
  );
}


if (delete __palette.red !== true) {
  throw new Test262Error(
    '#2 function Palette(){}; Palette.prototype = {red:0xFF0000, green:0x00FF00}; __palette = new Palette; delete __palette.red === true. Actual: ' +
    delete __palette.red
  );
}


if (__palette.red !== 0xff0000) {
  throw new Test262Error(
    '#3: function Palette(){}; Palette.prototype = {red:0xFF0000, green:0x00FF00}; __palette = new Palette; __palette.red === 0xFF0000. Actual: ' +
    __palette.red
  );
}


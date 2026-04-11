

/*---
esid: sec-symbol.prototype.description
description: Ensure that 'description' is not an own property of Symbols
features: [Symbol.prototype.description]
---*/

assert.sameValue(
  Symbol().hasOwnProperty('description'),
  false,
  'Symbol().hasOwnProperty("description") returns false'
);

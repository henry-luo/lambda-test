

/*---
esid: pending
description: |
  Eagerly throw TypeError when `this` is not an iterator.
features:
  - iterator-helpers
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
---*/


const mapper = (x) => x;

assertThrowsInstanceOf(() => Iterator.prototype.map.call(undefined, mapper), TypeError);
assertThrowsInstanceOf(() => Iterator.prototype.map.call(null, mapper), TypeError);
assertThrowsInstanceOf(() => Iterator.prototype.map.call(0, mapper), TypeError);
assertThrowsInstanceOf(() => Iterator.prototype.map.call(false, mapper), TypeError);
assertThrowsInstanceOf(() => Iterator.prototype.map.call('', mapper), TypeError);
assertThrowsInstanceOf(() => Iterator.prototype.map.call(new Symbol(''), mapper), TypeError);


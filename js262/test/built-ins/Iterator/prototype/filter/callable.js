

/*---
esid: sec-iteratorprototype.filter
description: >
  Iterator.prototype.filter is callable
features: [iterator-helpers]
---*/
function* g() {}
Iterator.prototype.filter.call(g(), () => false);

let iter = g();
iter.filter(() => false);

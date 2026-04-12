

/*---
esid: sec-iteratorprototype.take
description: >
  Iterator.prototype.take is callable
features: [iterator-helpers]
---*/
function* g() {}
Iterator.prototype.take.call(g(), 0);

let iter = g();
iter.take(0);

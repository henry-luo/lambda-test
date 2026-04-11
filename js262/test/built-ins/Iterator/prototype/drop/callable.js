

/*---
esid: sec-iteratorprototype.drop
description: >
  Iterator.prototype.drop is callable
features: [iterator-helpers]
---*/
function* g() {}
Iterator.prototype.drop.call(g(), 0);

let iter = g();
iter.drop(0);

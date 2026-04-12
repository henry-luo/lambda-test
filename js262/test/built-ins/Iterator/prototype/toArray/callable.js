

/*---
esid: sec-iteratorprototype.toArray
description: >
  Iterator.prototype.toArray is callable
features: [iterator-helpers]
---*/
function* g() {}
Iterator.prototype.toArray.call(g());

let iter = g();
iter.toArray();

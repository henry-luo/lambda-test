

/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator.prototype.flatMap is callable
features: [iterator-helpers]
---*/
function* g() {}
Iterator.prototype.flatMap.call(g(), () => []);

let iter = g();
iter.flatMap(() => []);

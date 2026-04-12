

/*---
esid: sec-iteratorprototype.forEach
description: >
  Iterator.prototype.forEach is callable
features: [iterator-helpers]
---*/
function* g() {}
Iterator.prototype.forEach.call(g(), () => {});

let iter = g();
iter.forEach(() => {});

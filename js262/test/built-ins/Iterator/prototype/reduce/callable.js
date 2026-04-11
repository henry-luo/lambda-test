

/*---
esid: sec-iteratorprototype.reduce
description: >
  Iterator.prototype.reduce is callable
features: [iterator-helpers]
---*/
function* g() {}
Iterator.prototype.reduce.call(g(), () => {}, 0);

let iter = g();
iter.reduce(() => {}, 0);

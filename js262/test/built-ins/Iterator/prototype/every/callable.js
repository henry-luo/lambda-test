

/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every is callable
features: [iterator-helpers]
---*/
function* g() {}
Iterator.prototype.every.call(g(), () => {});

let iter = g();
iter.every(() => {});

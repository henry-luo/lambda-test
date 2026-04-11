

/*---
esid: sec-iteratorprototype.some
description: >
  Iterator.prototype.some is callable
features: [iterator-helpers]
---*/
function* g() {}
Iterator.prototype.some.call(g(), () => {});

let iter = g();
iter.some(() => {});

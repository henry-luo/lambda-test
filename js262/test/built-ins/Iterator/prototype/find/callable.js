

/*---
esid: sec-iteratorprototype.find
description: >
  Iterator.prototype.find is callable
features: [iterator-helpers]
---*/
function* g() {}
Iterator.prototype.find.call(g(), () => {});

let iter = g();
iter.find(() => {});

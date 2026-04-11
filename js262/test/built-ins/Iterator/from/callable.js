

/*---
esid: sec-iterator.from
description: >
  Iterator.from is callable
features: [iterator-helpers]
---*/
function* g() {}

Iterator.from(g());
Iterator.from.call(null, g());

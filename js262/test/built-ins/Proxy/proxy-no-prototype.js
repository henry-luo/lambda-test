

/*---
es6id: 26.2.2
description: >
    The Proxy constructor does not have a prototype property because
    proxy exotic objects do not have a [[Prototype]] internal slot
    that requires initialization.
features: [Proxy]
---*/

assert(
  !Object.prototype.hasOwnProperty.call(Proxy, 'prototype'),
  "Proxy constructor does not have a prototype property"
);

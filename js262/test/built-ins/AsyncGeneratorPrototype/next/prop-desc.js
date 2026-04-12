

/*---
esid: sec-asyncgenerator-prototype-next
description: GeneratorPrototype.next property description
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [async-iteration]
---*/

async function* g() {}
var AsyncGeneratorPrototype = Object.getPrototypeOf(g).prototype;

verifyProperty(AsyncGeneratorPrototype, "next", {
  enumerable: false,
  writable: true,
  configurable: true,
});

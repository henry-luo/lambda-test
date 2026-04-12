

/*---
esid: sec-asyncgenerator-prototype-thow
description: GeneratorPrototype.return property description
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [async-iteration]
---*/

async function* g() {}
var AsyncGeneratorPrototype = Object.getPrototypeOf(g).prototype;

verifyProperty(AsyncGeneratorPrototype, "return", {
  enumerable: false,
  writable: true,
  configurable: true,
});

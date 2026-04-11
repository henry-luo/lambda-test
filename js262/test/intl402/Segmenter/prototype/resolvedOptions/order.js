

/*---
esid: sec-Intl.Segmenter.prototype.resolvedOptions
description: Verifies the property order for the object returned by resolvedOptions().
features: [Intl.Segmenter]
---*/

const options = new Intl.Segmenter([], {
  "granularity": "word",
}).resolvedOptions();

const expected = [
  "locale",
  "granularity",
];

const actual = Object.getOwnPropertyNames(options);


assert(actual.indexOf("locale") > -1, "\"locale\" is present");
for (var i = 1; i < expected.length; i++) {
  
  assert(actual.indexOf(expected[i-1]) < actual.indexOf(expected[i]), `"${expected[i-1]}" precedes "${expected[i]}"`);
}

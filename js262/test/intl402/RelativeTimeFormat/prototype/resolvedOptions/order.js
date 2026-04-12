

/*---
esid: sec-intl.relativetimeformat.prototype.resolvedoptions
description: Verifies the property order for the object returned by resolvedOptions().
features: [Intl.RelativeTimeFormat]
---*/

const options = new Intl.RelativeTimeFormat().resolvedOptions();

const expected = [
  "locale",
  "style",
  "numeric",
  "numberingSystem",
];

const actual = Object.getOwnPropertyNames(options);


assert(actual.indexOf("locale") > -1, "\"locale\" is present");
for (var i = 1; i < expected.length; i++) {
  
  assert(actual.indexOf(expected[i-1]) < actual.indexOf(expected[i]), `"${expected[i-1]}" precedes "${expected[i]}"`);
}

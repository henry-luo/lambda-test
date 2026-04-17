

/*---
esid: sec-intl.numberformat.prototype.resolvedoptions
description: Verifies the property order for the object returned by resolvedOptions().
features: [Intl.NumberFormat-unified]
---*/

const options = new Intl.PluralRules([], {
  "minimumSignificantDigits": 1,
  "maximumSignificantDigits": 2,
}).resolvedOptions();

const expected = [
  "locale",
  "type",
  "minimumIntegerDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "pluralCategories",
];

const actual = Object.getOwnPropertyNames(options);


assert(actual.indexOf("locale") > -1, "\"locale\" is present");
for (var i = 1; i < expected.length; i++) {
  
  assert(actual.indexOf(expected[i-1]) < actual.indexOf(expected[i]), `"${expected[i-1]}" precedes "${expected[i]}"`);
}

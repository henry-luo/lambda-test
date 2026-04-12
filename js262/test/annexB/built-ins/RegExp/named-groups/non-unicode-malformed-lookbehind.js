

/*---
esid: prod-GroupSpecifier
description: >
  \k is parsed as IdentityEscape as look-behind assertion is not a GroupName.
features: [regexp-named-groups, regexp-lookbehind]
---*/

assert(/\k<a>(?<=>)a/.test("k<a>a"));
assert(/(?<=>)\k<a>/.test(">k<a>"));

assert(/\k<a>(?<!a)a/.test("k<a>a"));
assert(/(?<!a>)\k<a>/.test("k<a>"));

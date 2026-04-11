

/*---
description: Lone surrogates in RegExp group names
esid: prod-GroupSpecifier
features: [regexp-named-groups]
---*/

assert.throws(SyntaxError, () => eval("/(?<a\uD801>.)/"), "Lead");
assert.throws(SyntaxError, () => eval("/(?<a\uDCA4>.)/"), "Trail");
assert.throws(SyntaxError, () => eval("/(?<a\uD801>.)/u"), "Lead with u flag");
assert.throws(SyntaxError, () => eval("/(?<a\uDCA4>.)/u"), "Trail with u flag");

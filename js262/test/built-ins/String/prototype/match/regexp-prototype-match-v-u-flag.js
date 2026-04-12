

/*---
esid: sec-regexp.prototype-@@match
description: RegExp.prototype[@@match] behavior with 'v' flag, comparing with 'u' flag
features: [Symbol.match, regexp-v-flag]
includes: [compareArray.js]
---*/

const text = '𠮷a𠮷b𠮷c👨‍👩‍👧‍👦d';

function doMatch(regex) {
  return RegExp.prototype[Symbol.match].call(regex, text);
}

assert.compareArray(doMatch(/𠮷/g), ["𠮷", "𠮷", "𠮷"], "Basic match with g flag");
assert.compareArray(doMatch(/𠮷/u), ["𠮷"], "Match with u flag");
assert.compareArray(doMatch(/𠮷/v), ["𠮷"], "Match with v flag");

assert.compareArray(doMatch(/\p{Script=Han}/gu), ["𠮷", "𠮷", "𠮷"], "Unicode property escapes with u flag");
assert.compareArray(doMatch(/\p{Script=Han}/gv), ["𠮷", "𠮷", "𠮷"], "Unicode property escapes with v flag");

assert.compareArray(doMatch(/./g), ["\uD842", "\uDFB7", "a", "\uD842", "\uDFB7", "b", "\uD842", "\uDFB7", "c", "\uD83D", "\uDC68", "\u200D", "\uD83D", "\uDC69", "\u200D", "\uD83D", "\uDC67", "\u200D", "\uD83D", "\uDC66", "d"], "Dot without u or v flag");
assert.compareArray(doMatch(/./gu), ["𠮷", "a", "𠮷", "b", "𠮷", "c", "👨", "‍", "👩", "‍", "👧", "‍", "👦", "d"], "Dot with u flag");
assert.compareArray(doMatch(/./gv), ["𠮷", "a", "𠮷", "b", "𠮷", "c", "👨", "‍", "👩", "‍", "👧", "‍", "👦", "d"], "Dot with v flag");

assert.compareArray(doMatch(/[👨‍👩‍👧‍👦]/v), ["👨"], "Complex emoji sequence in set notation with v flag");
assert.compareArray(doMatch(/[👨‍👩‍👧‍👦]/u), ["👨"], "Complex emoji sequence in set notation with u flag throws");

assert.sameValue(doMatch(/x/u), null, "Non-matching regex with u flag");
assert.sameValue(doMatch(/x/v), null, "Non-matching regex with v flag");


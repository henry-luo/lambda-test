

/*---
esid: sec-regexp.prototype-@@replace
description: RegExp.prototype[@@replace] behavior with 'v' flag
features: [Symbol.replace, regexp-v-flag]
---*/

const text = '𠮷a𠮷b𠮷';

function doReplace(regex, replacement) {
  return RegExp.prototype[Symbol.replace].call(regex, text, replacement);
}

assert.sameValue(doReplace(/𠮷/g, '-'), "-a-b-", "Basic replace with g flag");
assert.sameValue(doReplace(/𠮷/v, '-'), "-a𠮷b𠮷", "Replace with v flag");
assert.sameValue(doReplace(/\p{Script=Han}/gv, 'X'), "XaXbX", "Unicode property escapes with v flag");
assert.sameValue(doReplace(/./gv, '$&$&'), "𠮷𠮷aa𠮷𠮷bb𠮷𠮷", "Dot with v flag");
assert.sameValue(
  doReplace(/./gv, (match, index) => `[${match}:${index}]`),
  "[𠮷:0][a:2][𠮷:3][b:5][𠮷:6]",
  "Replace with function"
);

assert.sameValue(doReplace(/\p{Script=Han}/gu, 'X'), "XaXbX", "Unicode property escapes with u flag");
assert.sameValue(doReplace(/\p{Script=Han}/gv, 'X'), "XaXbX", "Unicode property escapes with v flag");

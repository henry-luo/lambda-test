

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assertThrowsInstanceOf(() => eval(`var o = {#a: 0};`), SyntaxError);
assertThrowsInstanceOf(() => eval(`var o = {#a};`), SyntaxError);
assertThrowsInstanceOf(() => eval(`var o = {#a(){}};`), SyntaxError);
assertThrowsInstanceOf(() => eval(`var o = {get #a(){}};`), SyntaxError);
assertThrowsInstanceOf(() => eval(`var o = {set #a(v){}};`), SyntaxError);
assertThrowsInstanceOf(() => eval(`var o = {*#a(v){}};`), SyntaxError);
assertThrowsInstanceOf(() => eval(`var o = {async #a(v){}};`), SyntaxError);
assertThrowsInstanceOf(() => eval(`var o = {async *#a(v){}};`), SyntaxError);


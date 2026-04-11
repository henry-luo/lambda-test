

/*---
description: ASI test in field declarations -- computed name interpreted as string index
esid: sec-automatic-semicolon-insertion
features: [class, class-fields-public]
---*/

class C {
  x = "lol"
  [1]
}

var c = new C();

assert.sameValue(c.x, 'o');



/*---
description: |
  String.prototype.normalize - normalize rope string
info: bugzilla.mozilla.org/show_bug.cgi?id=918987
esid: pending
---*/

function test() {
  
  var a = "";
  var b = "";
  for (var i = 0; i < 100; i++) {
    a += "\u0100";
    b += "\u0041\u0304";
  }
  assert.sameValue(a.normalize("NFD"), b);
}

if ("normalize" in String.prototype) {
  
  test();
}

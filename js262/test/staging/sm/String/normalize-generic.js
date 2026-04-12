

/*---
description: |
  String.prototype.normalize - normalize no String object
info: bugzilla.mozilla.org/show_bug.cgi?id=918987
esid: pending
---*/

function test() {
  var myobj = {
    toString: () => "a\u0301",
    normalize: String.prototype.normalize
  };
  assert.sameValue(myobj.normalize(), "\u00E1");
}

if ("normalize" in String.prototype) {
  
  test();
}

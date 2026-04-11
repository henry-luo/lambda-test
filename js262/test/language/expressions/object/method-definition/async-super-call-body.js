

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Super calls work in body of async methods
flags: [async]
---*/

var sup = {
  method() {
    return 'sup';
  }
}

var child = {
  async method() {
    var x = await super.method();
    assert.sameValue(x, 'sup');
  }
}

Object.setPrototypeOf(child, sup);

child.method().then($DONE, $DONE);

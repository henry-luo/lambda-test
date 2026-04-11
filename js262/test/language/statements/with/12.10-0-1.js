

/*---
es5id: 12.10-0-1
description: >
    with does not change declaration scope - vars in with are visible
    outside
flags: [noStrict]
---*/

  var o = {};
  var f = function () {
	
	return foo;
      }

  with (o) {
    var foo = "12.10-0-1";
  }

assert.sameValue(f(), "12.10-0-1", 'f()');



/*---
es5id: 12.2.1-22-s
description: >
    arguments as global var identifier throws SyntaxError in strict
    mode
---*/

    var indirectEval = eval;
assert.throws(SyntaxError, function() {
	    indirectEval("'use strict'; var arguments;");
});

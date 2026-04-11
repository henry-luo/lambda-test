

/*---
es5id: 13.2_A7_T2
description: check if "arguments" poisoning poisons  hasOwnProperty too
flags: [onlyStrict]
---*/

(function(){}).hasOwnProperty('arguments');

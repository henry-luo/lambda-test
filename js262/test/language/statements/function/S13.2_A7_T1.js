

/*---
es5id: 13.2_A7_T1
description: check if "caller" poisoning poisons  hasOwnProperty too
flags: [onlyStrict]
---*/

(function(){}).hasOwnProperty('caller');

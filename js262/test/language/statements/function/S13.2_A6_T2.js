

/*---
es5id: 13.2_A6_T2
description: >
    check if "arguments" poisoning poisons  getOwnPropertyDescriptor
    too
flags: [onlyStrict]
---*/

Object.getOwnPropertyDescriptor(function(){}, 'arguments');

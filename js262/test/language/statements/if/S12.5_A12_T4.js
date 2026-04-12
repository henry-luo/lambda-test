

/*---
info: Embedded "if/else" constructions are allowed
es5id: 12.5_A12_T4
description: Using embedded "if" into "if" constructions
---*/


if(true)
  if (false)
    throw new Test262Error('#1.1: At embedded "if/else" constructions engine must select right branches');


var c=0;
if(true)
  if (true)
    c=2;
if (c!==2)
    throw new Test262Error('#2: At embedded "if/else" constructions engine must select right branches');


if(false)
  if (true)
    throw new Test262Error('#3.1: At embedded "if/else" constructions engine must select right branches');


if(false)
  if (true)
    throw new Test262Error('#4.1: At embedded "if/else" constructions engine must select right branches');

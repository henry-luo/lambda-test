

/*---
info: Embedded "if/else" constructions are allowed
es5id: 12.5_A12_T3
description: Using embedded "if/else" into "if" without "else" constructions
---*/


if(true)
  if (false)
    throw new Test262Error('#1.1: At embedded "if/else" constructions engine must select right branches');
  else
    ;


if(true)
  if (true)
    ;
  else
    throw new Test262Error('#2.1: At embedded "if/else" constructions engine must select right branches');


if(false)
  if (true)
    throw new Test262Error('#3.1: At embedded "if/else" constructions engine must select right branches');
  else
    throw new Test262Error('#3.2: At embedded "if/else" constructions engine must select right branches');


if(false)
  if (true)
    throw new Test262Error('#4.1: At embedded "if/else" constructions engine must select right branches');
  else
    throw new Test262Error('#4.2: At embedded "if/else" constructions engine must select right branches');

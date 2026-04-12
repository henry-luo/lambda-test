

/*---
info: Function expession inside the "if" expression is allowed
es5id: 12.5_A10_T1
description: >
    Using function expession(function __func(){return 0;}) inside the
    "if" expression
---*/


if(function __func(){return 0;}){
    ;
}else {
    throw new Test262Error('#1: Function expession inside the "if" expression is allowed');
}


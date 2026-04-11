

/*---
info: |
    No matter how control leaves the embedded 'Statement',
    the scope chain is always restored to its former state
es5id: 12.10_A3.7_T5
description: >
    Declaring and calling a function within "with" statement, leading
    to completion by exception
flags: [noStrict]
---*/

this.p1 = 1;

var result = "result";

var myObj = {
    p1: 'a', 
    value: 'myObj_value',
    valueOf : function(){return 'obj_valueOf';}
}

try {
    with(myObj){
        (function f(){
            throw value;
            p1 = 'x1';
        })();
    }
} catch(e){
    result = p1;
}


if(result !== 1){
  throw new Test262Error('#1: result === 1. Actual:  result ==='+ result  );
}


if(p1 !== 1){
  throw new Test262Error('#2: p1 === 1. Actual:  p1 ==='+ p1  );
}


if(myObj.p1 !== "a"){
  throw new Test262Error('#3: myObj.p1 === "a". Actual:  myObj.p1 ==='+ myObj.p1  );
}


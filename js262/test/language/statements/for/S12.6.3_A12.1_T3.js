

/*---
info: |
    If (Evaluate Statement).type is "break" and (Evaluate Statement).target
    is in the current label set, (normal, (Evaluate Statement), empty) is
    returned while evaluating a "var-loop"
es5id: 12.6.3_A12.1_T3
description: Trying to break non-existent label
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

__str="";


outer:for(var index=0;index<4;index+=1){
    nested:for(var index_n=0;index_n<=index;index_n++){
        if(index*index_n >= 4)break nonexist;
        __str+=""+index+index_n;
    }
}


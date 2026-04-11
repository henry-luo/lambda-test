

/*---
info: |
    If (Evaluate Statement).type is "continue" and (Evaluate
    Statement).target is in the current label set, iteration of labeled
    "var-loop" breaks
es5id: 12.6.3_A11.1_T3
description: Trying to continue non-existent label
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

__str="";


outer:for(var index=0;index<4;index+=1){
    nested:for(var index_n=0;index_n<=index;index_n++){
        if(index*index_n == 6)continue nonexist;
        __str+=""+index+index_n;
    }
}


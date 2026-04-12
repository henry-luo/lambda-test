

/*---
info: Check For Statement for automatic semicolon insertion
es5id: 7.9_A6.1_T12
description: for (false \n semicolon false \n semicolon \n)
---*/


for(false
    ;false
    ;
) {
  break;
}

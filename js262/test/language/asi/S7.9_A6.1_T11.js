

/*---
info: Check For Statement for automatic semicolon insertion
es5id: 7.9_A6.1_T11
description: for (false \n semicolon \n semicolon \n)
---*/


for(false
    ;
    ;
) {
  break;
}

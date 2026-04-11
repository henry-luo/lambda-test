

/*---
info: Check For Statement for automatic semicolon insertion
es5id: 7.9_A6.1_T7
description: for (false semicolon false \n semicolon \n)
---*/


for(false;false
  ;
) {
  break;
}



/*---
info: |
    Additive/Substract Operator(A/SO) in combination with itself separated by LT or white spaces
    after automatic semicolon insertion gives valid result
es5id: 7.9_A5.9_T1
description: >
    Try use Variable1 (different combinations of three +) Variable2
    construction
---*/

var x=1, y=1;
var z=
x
+
+
+
y


if ((z!==2)&&(y!==1)&&(x!==1)) {
	throw new Test262Error('#1: ');
}


z=
x + + + y


if ((z!==2)&&(y!==1)&&(x!==1)) {
	throw new Test262Error('');
}


z=
x
+    +
+    +
y


if ((z!==2)&&(y!==1)&&(x!==1)) {
	throw new Test262Error('');
}


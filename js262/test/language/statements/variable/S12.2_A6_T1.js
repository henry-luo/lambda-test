

/*---
info: VariableDeclaration within "try-catch" statement is allowed
es5id: 12.2_A6_T1
description: Declaring variable within "try-catch" statement
---*/


try{
	intry__var=intry__var;
}catch(e){
	throw new Test262Error('#1: Variable declaration inside "try" block is admitted');
};


try{
	incatch__var=incatch__var;
}catch(e){
	throw new Test262Error('#2: Variable declaration inside "catch" block is admitted');
};


try{
  var intry__var;
}catch(e){
    var incatch__var;
};

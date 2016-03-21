// sumStrings('712569312664357328695151392', '8100824045303269669937') - Expected: 712577413488402631964821329, instead got: 7.125774134884027e+26
function sumStrings(a,b) { 
	var stack = [],a1=a,b1=b,result = 0,mem = 0;
	if(parseInt(a,10) < parseInt(b,1)) {
		a1 = b;
		b1 = a;
	}
	for(var i = b1.length;i++;){
		result = parseInt(charAt(i),10) + parseInt(b1.charAt(i),10) + mem;
		if(result>9){
			stack.push(result.toString.charAt(0));
			mem = result.toString.charAt(1);
		}else{
			stack.push()
			mem = 0;
		}
	}
	return sum.toString();
}
console.log(sumStrings("5","5"));
console.log(sumStrings("","5"));
console.log(sumStrings("5",""));
console.log(sumStrings("25","55"));
console.log(sumStrings("125","55"));
console.log(sumStrings("15","155"));
console.log((sumStrings('712569312664357328695151392', '8100824045303269669937')==="712577413488402631964821329")+" 712577413488402631964821329");
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));

function toSignificantFigures(number, count) {
	var ret_number="",numbers = [],number_str = number.toString(),len = 0, str = ""; 
	len = number_str.length;
	if(number_str.indexOf(".")>-1){
		if(number_str.charAt(0)!=="0"){
			ret_number=number_str.substring(0,count+1).split("");
			if(parseInt(number_str.charAt(count),10)>=5) ret_number[ret_number.length-1]=parseInt(ret_number[ret_number.length-1],10)+1;
			ret_number=ret_number.join("");
		}else{
			var number_str = number.toString().replace(/0\.0+/,""),
			zero_str = number.toString().replace(/[1-9]+/,"");
			part_number_str = ""; 
			part_len = 0,len = 0,helper_count = 0, l = 0;
			len = number_str.length;
			helper_count = len - count;
			if(helper_count>0){
				part_number_str = number_str.substring(0,count).split("");
				part_len = part_number_str.length;
				if(parseInt(number_str.charAt(count+1),10)>=5) 
					part_number_str[count-1] = parseInt(part_number_str[count-1],10)+1; 
				ret_number = zero_str+number_str;
				l = len - count;
			}else{
				ret_number = zero_str+number_str;
				l = Math.abs(helper_count);
			}
			while(l>0) {ret_number +="0";l--;} 
		}
	}else{
		numbers = number.toString().substring(0,count).split("");
		if(parseInt(number.toString().charAt(count))>=5)  numbers[count-1]=parseInt(numbers[count-1])+1;
		for(var i = 0;i < (len-count);i++)  numbers.push("0");
		if((len-count)<0){
			numbers.push("."); 
			for(var i = 0;i < (count-len);i++)  numbers.push("0");
		}
		ret_number = numbers.join("");
	}
	return ret_number;
}
// Test.assertEquals(toSignificantFigures(3.14159, 3), "3.14");
// Test.assertEquals(toSignificantFigures(656, 2), "660");
// Test.assertEquals(toSignificantFigures(0.01, 3), "0.0100");
//
// toSignificantFigures(3.14159,  3)
// // returns "3.14"
//
// toSignificantFigures(0.0012, 4)
// // returns "0.001200"
//
// toSignificantFigures(987654, 3)
// // returns "988000"
//
console.log(toSignificantFigures(656,5));
console.log(toSignificantFigures(656,2));
console.log(toSignificantFigures(987654,3));
console.log(toSignificantFigures(3.14159,3));
console.log(toSignificantFigures(0.001212,4));
console.log(toSignificantFigures(0.0012678,4));

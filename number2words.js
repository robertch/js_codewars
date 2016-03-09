function number2words(n){
var totwenty = ["zero","one","two",
				"three","four","five",
				"six","seven","eight",
				"nine","ten","eleven",
				"twelve","thriteen",
				"fourteen","fifteen","sixteen",
				"seventeen","eighteen","nineteen"],
	tohundred = ["twenty","thirty","fourty",
				"fifty","sixty","seventy","eighty","ninety"],
	totousend = ["hundred","thousend"],
	number = n.toString().split("");

	if(n<20){
		return totwenty[n];
	}else{
		var ret_number = "";
		for(var i=number.length;i--;){
			if(number[i]===0){
				
			}else{
			}
		} 
	}



}

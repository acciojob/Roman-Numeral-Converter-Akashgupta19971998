function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

 // your code here
    var roman = '',i;
	for (i in Object.keys(obj)) {
    while ( num >= obj[i] ) {
      roman +=i;
      num -= obj[i];
    }
  }
  return roman;






	
	// var roman = '';
 //  for (var key in obj) {
 //    if (num == obj[key]) {
 //      return roman +=key;
 //    }
 //    var check = num > obj[key];
 //    if(check) {
 //      roman = roman + key.repeat(parseInt(num/obj[key]));
 //      num = num%obj[key];
 //    }
 //  }
 // return roman;



}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

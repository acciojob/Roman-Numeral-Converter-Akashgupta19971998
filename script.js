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

  //your code here
  // var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  var roman = '',i;
	for (i in Object.keys(obj)) {
    while ( num >= obj[i] ) {
      roman += obj[i];
      num -= obj[i];
    }
  }
  return roman;

	
// var roman='';
// if (num === 0) {
// return '';
//   }
//   for (let i in obj.length) {
//     if (num >= obj[i][0]) {
//       roman+= obj[i][1] + convertToRoman(num - obj[i][0]);
		
//     }
//   }
// return roman;


}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

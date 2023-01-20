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

  let i = 0;
  let result = "";
  
  while(num > 0) {
      for(;num < obj[i].first; i++);
      let roman = obj[i].second;
      let number = obj[i].first; 
      let count = (num / number);
      
      for(let j = 0; j < count; j++)
          result += roman;
      num = num - count * number;
  }
  
  return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

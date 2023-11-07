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

	let len = Object.keys(obj).length;
	for (let i = 0; i < len; i++) {
		let k = obj[i][1];
		let l = num/k;
		if (l>1) {
			let j = Math.floor(l);
			let ans = [];
			for (let m = 0; m < j; m++) {
				ans.push(obj[i][0]);
			}
		}
		num = num - k;
	}
	let str = ans.join("");
	return str;
	// alert(str);

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

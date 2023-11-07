function convertToRoman(num) {
  	// const obj = {
   //    0:['M',1000], 
   //    1:['D', 500], 
   //    2:['C', 100], 
   //    3:['L', 50], 
   //    4:['X', 10], 
   //    5:['V', 5], 
   //    6:['I', 1]
   //  };

	const obj = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

	let ans = [];
	let len = Object.keys(obj).length;
	for (let i = 0; i < len; i++) {
		let k = obj[i][1];
		let l = num/k;
		if (l>=1) {
			let j = Math.floor(l);
			for (let m = 0; m < j; m++) {
				ans.push(obj[i][0]);
			}
			num = num - j*k;
			if (num==4) {
				ans.push("IV")
				break;
			}
		}
	}
	let str = ans.join("");
	let romanObj = {};
	return romanObj.roman = str;
	// return str;
	// alert(str);

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman

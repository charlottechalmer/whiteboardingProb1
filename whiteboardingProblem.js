function isPrime(num) {
	var lessThanArr = [];
	var primes = [];
	var notPrimes = [];
	for (var i = num - 1; i >= 2; i--) {
		lessThanArr.push(i);
	}
	//console.log("this is the array with all the numbers less than input: " + lessThanArr);
	
	var two = lessThanArr.pop();
	primes.push(two);
	
	// console.log("this is the arr without two: " + lessThanArr);
	// console.log("this is the array of primes with two: " + primes);
	
	for (var j = (lessThanArr.length - 1); j >= 0; j--) {

		// for(var l = 3; l <= lessThanArr[j]; l++) {
		// 	if (l === Math.sqrt(lessThanArr[j])) {
		// 		var hasSqrt = lessThanArr[j];
		// 		var indexOfVal = lessThanArr.indexOf(hasSqrt);
		// 		var defNotPrime = lessThanArr.splice(indexOfVal, 1);
		// 		notPrimes.push(defNotPrime);
		// 	}
		// }
		// console.log("this is the array with no numbers that are perf sqrts: " + lessThanArr);
		// console.log("this is the array of not primes: " + notPrimes);

		for(var l = 3; l < lessThanArr[j]; l++) {
			if (lessThanArr[j] % l === 0) {
				var defNotPrimeVal = lessThanArr.pop();
				notPrimes.push(defNotPrimeVal);
			}
		}

		for(var k = 2; k < lessThanArr[j]; k++) {
			if (lessThanArr[j] % k === 0) {
				var notAPrimeVal = lessThanArr.pop();
				notPrimes.push(notAPrimeVal);

				// console.log("this is the array with all the numbers less than input AGAIN: " + lessThanArr);
		
				// console.log("this should be nums not prime: " + notPrimes);

			} else {
				var isAPrimeVal = lessThanArr.pop();
				primes.push(isAPrimeVal);
				
				//console.log("this should be nums that are prime: " + primes);
			}
		}
	}
	
	return primes;	
}






console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(13));
console.log(isPrime(67));
console.log(isPrime(349));

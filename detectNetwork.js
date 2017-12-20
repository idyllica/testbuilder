// var cardStartingNumbers = {
// 	3: ['dinersClub', 'americanExpress'],
// 	4: ['switch','visa'],
// 	5: ['maestro', 'switch', 'chinaUnionPay', 'masterCard'],
// 	6: ['maestro','switch', 'chinaUnionPay', 'discover']
// };

// var cardLengths = {
// 	dinersClub: [14],
// 	americanExpress: [15],
// 	switch: [16, 18, 19],
//   maestro: [12],
//   chinaUnionPay: [16,17, 18, 19],  
//   masterCard: [16],
//   visa: [13,16,19],
//   discover: [16,19]
// };

// var cardPrefixes = {
// 	dinersClub: [38],
// 	maestro: [5018, 5020, 5038, 6304],
// 	switch: [4903, 4905, 4911, 4936, 6333, 6759, 564182, 633110],
// 	chinaUnionPay: [624, 625, 626, 6282, 6283, 6284, 6285, 6286, 6287, 6288, 5308]
// };


// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (cardNumber[0] == 3 && cardNumber[1] >= 8 && cardNumber.length === 14) {
    return 'Diner\'s Club';
    } else if (cardNumber[0] == 3 && cardNumber.length === 15) {
    	return 'American Express';
    } else if (((cardNumber.substring(0,4) == 5018)|| 
    	        (cardNumber.substring(0,4) == 5020)||
    	        (cardNumber.substring(0,4) == 5038)||
    	        (cardNumber.substring(0,4) == 6304)) && cardNumber.length >= 12) {
    	return 'Maestro';
    } else if (((cardNumber.substring(0,4) == 4903) ||
     					(cardNumber.substring(0,4) == 4905) ||
     					(cardNumber.substring(0,4) == 4911) ||
     					(cardNumber.substring(0,4) == 4936) ||
     					(cardNumber.substring(0,6) == 564182) ||
     					(cardNumber.substring(0,6) == 633110) ||
     					(cardNumber.substring(0,4) == 6333) ||
     					(cardNumber.substring(0,4) == 6759))
     						&& (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length ===19)) {
    	return 'Switch';
    } else if (((cardNumber.substring(0,3) == 624) ||
    	        (cardNumber.substring(0,3) == 625) ||
    	        (cardNumber.substring(0,3) == 626) ||
    	        (cardNumber.substring(0,4) == 6282) ||
    	        (cardNumber.substring(0,4) == 6283) ||
    	        (cardNumber.substring(0,4) == 6284) ||
 							(cardNumber.substring(0,4) == 6285) ||
    	        (cardNumber.substring(0,4) == 6286) ||
    	        (cardNumber.substring(0,4) == 6287) ||
    	        (cardNumber.substring(0,4) == 6288) ||
    	        (cardNumber.substring(0,4) == 5038) ||
    	        (((cardNumber.substring(0,3) == 622) &&
    	        ((cardNumber[3]+cardNumber[4]+cardNumber[5]) >= 126) && 
    	        ((cardNumber[3]+cardNumber[4]+cardNumber[5]) <= 925)))
      && (cardNumber.length === 16 || cardNumber.length === 17 | cardNumber.length === 18 || cardNumber.length == 19))) {
    	return 'China UnionPay'; 
    } else if (cardNumber[0] == 5 && cardNumber.length === 16) {   
    	return 'MasterCard';  
    } else if (cardNumber[0] == 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length ===19)) {
    	return 'Visa';
    } else if (cardNumber[0] == 6 && (cardNumber.length === 16 || cardNumber.length === 19)) {
    	return 'Discover';
    }
}; 


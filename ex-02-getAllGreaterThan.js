//------------------------------------------------------------------
// TASK : getAllGreaterThan()
//  Write a function called `getAllGreaterOrLess` that takes an array
//  and a number as arguments and returns all numbers that are greater
//  the number argument.
//
// getAllGreaterThan(5, [1,2,3,4,5,6,7,8])
//   => [6,7,8]
//
// getAllGreaterThan(10, [10,12,30,4,2,16,7,88])
//   => [12,30,16,88]
//
//
// getAllGreaterThan(100, [10,12,30,4,2,16,7,88])
//   => []
//
//------------------------------------------------------------------

function getAllGreaterThan(number, list){
	var result = list.filter(function(greater){
		return greater > number;
	});
	
	return result;
}



//*** DONT TOUCH ***

var exampleArray_2 = [10,12,30,4,2,16,7,88]
var outputArray_2 = getAllGreaterThan(10, exampleArray_2 )
console.assert(outputArray_2.length === 4 )
console.assert(outputArray_2[0] === 12)
console.assert(outputArray_2[1] === 30)
console.assert(outputArray_2[3] === 88)

var exampleArray_3 = [10,12,30,4,2,16,7,88]
let outputArray_3= getAllGreaterThan(100, exampleArray_3 )
console.assert(outputArray_3.length === 0 )

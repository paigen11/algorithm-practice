var array = [1, 3, 5, 7, 9, 11, 13];

function guess(secretNumber){
	for(var i = 0; i < array.length; i++){
		if(secretNumber == array[i]){
			return i;
		}
	}
}
console.log(guess(5));

// for n numbers, the worst case is n, best case is 1, the average case is n/2

function randomGuess(num){
	notGuessed = true;
	var counter = 0;
	while(notGuessed){
		counter++;
		var rand = Math.random() * array.length;
		if(array[rand] == num){
			notGuessed = false;
		}
	}
	return counter;
}

// best case 1 guess, worst case zombies attack, average case n/2

var array = [1, 2, 3, 4, 5, 6, 7, 8];

function getFirst(arr){
	return arr[1];
}

getFirst(array);

// this will always take 1 step

var counter = 0;
while(array[counter]){
	counter++;
}

// this requires the same number of steps as there are things (nums in the array)

var tallest = 0;
jQuery('.entry-text').each(function(){
	of(jQuery(this).height() > tallest){
		tallest = jQuery(this).height();
	}
});
console.log(tallest);

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
for(var i =0; i < array.length; i++){
	for(var j = 0; j< array.length; j++){
		console.log(j);
	}
}

// the result is array squared, n times n is n squared

function fibonacci(number){
	if(number <=1){		// this number <= 1 must exist, 
		return number;
	}
	return fibonacci(number - 2) + fibonacci(number - 1);
}

var start = new Date().getTime();
fibonacci(40)
// JS can't get out of the recusions until done
var end = new Date().getTime();
var time = end - start;
console.log('execution time:' + time);
//this is an example of recursion 

var array = [4,2,7,9,1];
var array = [2, 4, 7, 9, 1]; [1,2] - swap 2 and 4
var array = [2,4,7,9,1];[2,3] - no swap, 4, 7
var array = [2,4, 7, 9, 1]; [3,4] - no swap, 7,9
var array = [2,4,7,1,9]; [4,5] - swap, 9, 1

var array = [2,4,7,1,9]; [1,2], no swap
var array = [2,4,7,1,9]; [2,3], no swap
var array = [2,4,1,7,9]; [3,4], swap 1, 7
var array = [2,4,1,7,9]; [4,5]. no swap

=======
var array[1,2,4,7,9]; with a boolean, becomes O(n)
var array[9,7,4,2,1]; worst case scenario where every number has to be run through and reversed O(n^2)

//this is bubble sort - it repeatedly steps through the list to be ordered, 
// compares each adjacent element and swaps them if they're in the wrong order - O(n^2)

function bubbleSort(items){
	var length = items.length;
	for(var i = 0; i < length; i++){
		for(var j = 0; j < (length - i); j++){
			if(items[j] > items[j+1]){
				var tmp = items[j];
				items[j] = items[j+1];
				items[j+1] = tmp;
			}
		}
	} //number of passes
}

insertion sort

[1,6,3,8,4,3,23,3,6]
[] -----[1,6,3,8,4,3,23,4,6] 
[1] -----[6,3,8,4,3,23,4,6] = 1
[1,6] --- [3,8,4,3,23,4,6] =6
[1,3,6] --[8,4,3,23,4,6] = 3
[1,3,6,8] - [4,3,23,4,6] = 8

Quicksort  // has a best case of n * log(n)
[] ! [1,4,7,3]
pivot = 3 // if smaller than pivot it goes to left side, if bigger goes to right side
[1] 3 [4,7]

[3,7,2,5,9,1,8,19,4]
pivot = 11
[3,7,2,5,9,1,8,4] 11 [19]
pivot = 7
[3,2,5,1,4] 7 [9,8]
pivot = 3
[2,1] 3 [5,4]
pivot = 2
[1] 2 []
1,2,3
pivot =5
[4]5[]
1,2,3,4,5
[]8[9]
1,2,3,4,5,8,9
[]11[19]
1,2,3,4,5,8,9,11,19

Merge sort - //n * log(n) worst case
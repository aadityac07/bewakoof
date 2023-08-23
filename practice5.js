// Q Find out all odd numbers and even numbers addition from given array.
var array = [2, 15, 68, 79, 23, 65, 88, 123, 69, 82, 42, 4, 6, 99, 22, 55,];
var additionOfOddNumber = 0;
var additionOfEvenNumber = 0;

for (var i = 0; i < array.length; i++) {
    // console.log(array[i])
    if (array[i] % 2 != 0) {
        console.log(additionOfOddNumber,"+" , array[i])
        additionOfOddNumber + additionOfOddNumber + array[i];

        console.log(additionOfOddNumber, "value updated")
    }
    else {
        additionOfEvenNumber + additionOfEvenNumber + array[i];
        console.log(additionOfOddNumber, "value updated")
    }
    

}

console.log(additionOfEvenNumber, "- Addition for even number")
console.log(additionOfOddNumber, "-Addition for Odd number ")





// Q Given an array find out addition of two number which is equal to target

var array3 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3];
var target = 14;
console.log("The given array is",array3)
console.log("The given target to be found is",target)

for (var i = 0; i < array3.length; i++) {
    console.log(array[i])
    for (var j = i + 1; j < array.length; j++) {
        console.log(i, j)
        console.log(array[i], array[j])
        console.log(array[i] + array[j])
        console.log(array[i] + array[j] == target)
        if (array3[i] + array3[j] == target) {
            console.log(array3[i], "+", array3[j], "=", array3[i] + array3[j])
        }
    }
    
}

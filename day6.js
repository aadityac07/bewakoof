const array1 = [1, 4, 5, 6, 9, 8, 20, 76, 3, 456];
const target = 10;

for (var i=0; i< array1.length -2; i++){
    for(var j =i +1; j<array1.length -1; j++) {
        for(var k= j+1; k<array1.length; k++){
            if (array1[i] + array1[j] + array1[k])
            console.log(array1[i],array1[j], array1[k] )  
        }
    }
}

// function
    function subtraction (){
        var a = 95
        var b = 55
        console.log(a-b)

    }
    console.result = subtraction ();
    console.log(result)

    function division () {
        var a = 73
        var b = 27
        console.log(a/b)
    }
    console.result = division ();

//     // fucntions multi
   function multi (numerical1,numerical2,numerical3){
    console.log(numerical1, numerical2, numerical3)
    const result = numerical1 + numerical3 / numerical3;
    const result2 =numerical1 * numerical2 - numerical3;
    return result + result2;

   }
   console.log(multi(273,457,78));

   function admission (name,surname,dob,course,city){
   console.log( `i'm ${name} my surname is ${surname} My dob is ${dob} course ${course}} im from ${city}`)
   }
   admission("Aaditya","Chinchrekar","4/3/2003","B.SC-It","Mumbai")

//  function of  additionofallelements
var array = [1, 2, 6, 87,20,74,900,0.1];

function Additionofallelements(array) {
    // console.log(array,"-array")
    var result = 0;
    for  (var i= 0; i < array.length;i++); {
    result= result + array[i] 
}
return result;

}


console.log(Additionofallelements(array));

var myarray = [45,7,67,93,89,7,43,7,45]; 
// var target = 7;
function find(array,target) {
    
    for ( var i = 0; i < array.length; i++); {
        if (array[i] == target)  {
            return "correct";
        }
    }
return "incorrect"

}
console.log (find(myarray, count));

var myarray = [74,78,74,9,87,66,74,1,2,45,67];

// var target =74;
function find(array,target) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if(array[i] ==target) {
            count++;
        }
    }
    return count;
}  
console.log(find(myarray,target)); 

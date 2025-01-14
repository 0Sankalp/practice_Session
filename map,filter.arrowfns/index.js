// given an array give me back a new array in which every value is multiplied by 2
//[1,2,3,4,5,6]
//[2,4,6,8,10]

 /*output-
[ 2, 4, 6, 8, 10, 12 ]
 */


// we can do  this in one line of code using map function
const input=[1,2,3,4,5,6];
const newArray = input.map(function(item){
    return item*2;
    });
    console.log(newArray);
    /*output-
    [ 2, 4, 6, 8, 10, 12 ]  
    this code is genrated by black box 
    
    */
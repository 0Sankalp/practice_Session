//create a map function that takes 2 inputs
//Am array,and a trasnformation callbak/fn
//and trasnsform the array into a new one using the transformation 

//ans

//const arr = [1,2,3,4,5,6];
const arr = ["Sankalp","Dwarika","Shivam"];
const ans = arr.filter(function (n){
    if (n.startsWith("S")){
    //if (n % 2 ==  0 ){
        return true;

    }else{
        return false;

    }
});
console.log(ans);
// output - [ 2, 4, 6 ]
//output - ["Sankalp","Dwarika"]
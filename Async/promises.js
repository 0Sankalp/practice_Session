const fs=require('fs')

// my own async function
function dwarikaReadFile(){
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve");
            resolve(data);

        });
    })
}
//callback function to call 
function onDone(data){
    console.log(data)
}
var a=dwarikaReadFile();
a.then(onDone);
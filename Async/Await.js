function dwarikaReadFile(){
    let p=new Promise(function(resolve){
        //do some assync logic here
                resolve("hi there")

    });
    return p;
}
    //function main(){
    // no callback,no.then syntax
    async function main() {
        const  value=await dwarikaReadFile();

        
    
        //dwarikaReadFile().then(function(value)  {
            console.log(value);
    }
main();
console.log("after main");
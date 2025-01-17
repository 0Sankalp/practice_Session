const fs = require("fs"); 
// File system module

fs.readFile("a.txt", "utf-8", function (err, data) {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(data);
});

console.log("hi there")
let a= 0;
// take very long,longe rthen the file read
for (let i=0;i<10000000000;i++){
    a++;

}
console.log ("hi there 2345678")
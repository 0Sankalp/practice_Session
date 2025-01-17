function findsum(n){
    let ans=0;
    for(let i=1;i<n;i++)
    {
        ans=ans+i
    }
    return ans;

}
let ans = findsum(100)
console.log(ans)
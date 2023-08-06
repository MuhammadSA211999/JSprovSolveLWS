const timer=(n)=>{
    console.log("Start timer")
    for(let i=0;i<=n;i++){
        setTimeout(()=>{
         console.log(i);
         
        },i*1000)
}
console.log("End Timer");

    }
timer(4)
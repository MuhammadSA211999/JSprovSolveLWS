const delayTimeout=(i)=>{
    return new Promise((resolve)=>{
        setTimeout((i)=>{
         resolve(i)
         //promise theke zeta resolve/reject kora hoy seta onno function/variable recieve kore
        },i*1000)
    })
}


const timer=async(n)=>{
    console.log("Start timer")
    for(let i=0;i<=n;i++){
        // setTimeout(()=>{
        //  console.log(i);
         
        // },i*1000)
}
console.log("End Timer");

    }
timer(4)
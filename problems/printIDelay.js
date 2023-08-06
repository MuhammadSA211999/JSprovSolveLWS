const delayTimeout=(i)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
         resolve(i)
         //promise theke zeta resolve/reject kora hoy seta onno function e variable recieve kore ba return value hisabe pay.
        },i*1000)
    })
}


const timer=async(n)=>{
    console.log("Start timer")
    for(let i=0;i<=n;i++){
        //first choice wrong chilo
        // setTimeout(()=>{
        //  console.log(i);
         
        // },i*1000)
        
     //second choice
     const serialNum=await delayTimeout(i)
     console.log(serialNum);
     }
console.log("End Timer")
  }

timer(4)
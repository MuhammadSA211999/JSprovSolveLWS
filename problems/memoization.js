/*
kuno ekti function and tar vitorer integration computer er memmory te save kore rakha and zodi oi function ti same value diye abar call kora hoy tahole memmory te save kore rakha result deyar pokriyake Memoization bola hoy.
Prottyekti Memoized function i Higher Order Function.
Memoization e closure concept khatano zay
 */

const add=(x)=>{
    return x+10
}

//memoFunc ekti HOF, zeti closure functionality use kore
const memoFunc=(addFunc)=>{
              //add()

    //closure area
  let cachedData={}

   //calculate function start
   return function(x){
        //calculate funct()
         
        // console.log(cachedData); //{10: 20}
        
        if(cachedData[x]){
            console.log('Return from cached');
            return cachedData[x] //ekhan value return kora hoyeche
        }
        else{
            console.log('return from calculate');
            const result=addFunc(x)
            cachedData[x]=result
            return result
            }
           }
        //    calculate function end
}

const calculate=memoFunc(add)
console.log(calculate(10))
console.log(calculate(10))


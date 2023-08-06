/*
kuno ekti function and tar vitorer integration computer er memmory te save kore rakha and zodi oi function ti same value diye abar call kora hoy tahole memmory te save kore rakha result deyar pokriyake Memoization bola hoy.
Prottyekti Memoized function i Higher Order Function.
Memoization e closure concept khatano zay
 */

const add=(x)=>{
    return x+10
}

//memoFunc ekti HOF
const memoFunc=(func)=>{
    //closure area
    return function(){

    }
}

const calculate=memoFunc(add)
console.log(calculate)


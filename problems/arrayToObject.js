//prob1: elti array te koyekti duplicate item takbe, duplicate item er object hisabe tar songka return korte hobe
/*
const fruits=["mango","pineaple","jack","mango","avocado","jack","mango","avacado","pineaple","avacado",]
return hobe {mango:3,pineaple:2,jack:2, avacado:3}

array er item gulu key hisabe bebohrito hobe
key er value hobe duplicate item er sathe 1+
*/ 
const fruits=["mango","pineaple","jack","mango","avacado","jack","mango","avacado","pineaple","avacado",]

function countDuplicates(data){
    let output={}
    data.map(item=>{
        output[item]=(output[item]||0)+1
    })
    return output
}
const itemObj=countDuplicates(fruits)
// console.log(itemObj) //{mango: 3, pineaple: 2, jack: 2, avacado: 3}

//ekti array er item hisabe onek gulu nmbers ache. array item guluke key hisabe use kore total duplicate item er value gonona kore, ekti object return koro.
//item=key, keyValue=duplicate soho total item number
const numbers=[1,3,6,8,4,5,8,9,0,3,5,2,6,8,]
const totalNumberOfDuplicates=(numbers)=>{
    let output={}
    numbers.map(number=>{
        output[number]=(output[number]||0)+1
    })

    return output
}
const numbersObj=totalNumberOfDuplicates(numbers)
// console.log(numbersObj) //{0: 1, 1: 1, 2: 1, 3: 2, 4: 1, 5: 2, 6: 2, 8: 3, 9: 1}
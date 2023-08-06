/* Ekti string er prottyekti word er protiti charecter ke reverse korte hobe. puru string ke noy sudu word ke reverse korte hobe
example: const text="I love Bangladesh"
const revers="I evol hsedalgnaB"
 */
const text="I love Bangladesh"
const reverseWord=(str)=>{
const arrayWord=str.split(" ")
const reversWordArray= arrayWord.map(word=>{
      
return word.split('').reverse().join('')
    //    love=>[l,o,v,e]=>[e,v,o,l] =>"evol"         
//split("") method ekta string ke array te convert kore.
//join("") method ekta string ke array te convert kore
    })
    // console.log(reversWordArray) //['I', 'evol', 'hsedalgnaB']
    return reversWordArray.join(' ') //I evol hsedalgnaB
    
}

const reversText=reverseWord(text)
// console.log(reversText) //I evol hsedalgnaB

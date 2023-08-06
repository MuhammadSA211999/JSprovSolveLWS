/*
ekti sentance er word ke ascending(chuto=>boro) order e sajate hobe
const sentance="Java is a programming language"
output sortSentence="a is Java language programming"
*/
const sentance="Java is a programming language"
const sortingWordsByLength=(text)=>{
    const wordsArray=text.split(' ')
    const sortedText=wordsArray.sort((a,b)=>{
    //sort orginal array ke mutate kore. sort(()=>{}) method er moddhye compare function deya zay
      return  a.length-b.length
    })
    return sortedText //['a', 'is', 'Java', 'language', 'programming']
}

const sortedSentence=sortingWordsByLength(sentance)
console.log(sortedSentence);  //['a', 'is', 'Java', 'language', 'programming']
//in lone line descending order
const sortedText=sentance.split(" ").sort((a,b)=>b.length-a.length)
console.log(sortedText)
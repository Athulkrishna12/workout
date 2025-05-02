//let count = 0;
//let str = "malayalam";
//let result={};
//for (let i = 0; i < str.length; i++) {
  //  for (let j = 0; j < str.length; j++) {
    //    if (str[i] == str[j]) {
      //      count++;
        //}
    //}
    //result[str[i]] = count;
   //count = 0;

    //}
    

//console.log( result);
function countCharacters(str) {
    let count = 0;
let result={};
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
        if (str[i] == str[j]) {
            count++;
        }
    }
    result[str[i]] = count;
   count = 0;

    }
    return result;
}
    

console.log( countCharacters("malayalam"));
console.log( countCharacters("hello world"));
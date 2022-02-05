'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    let lastSpace = str.lastIndexOf(' ')
    if (lastSpace == -1) {
        return str
    }
    else {
        return str.slice(lastSpace + 1)

    }
    
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let arr = str.split(' ');
    let lastWord = arr[arr.length - 1];
    return lastWord
    // write your code here
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {

    let removed = [];
    let stringArray = str.split(' ');
    if (stringArray[0] = "I") {
        removed = stringArray.splice(0, 1, "We");
        if (stringArray[1] == "was") {
            removed = stringArray.splice(1, 1, "were");
        }
        else if (stringArray[1] == "am") {
            removed = stringArray.splice(1, 1, "are");
        }

    }

    return stringArray.join(" ")

    // write your code here
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    let newsentence;
    if (arr.length != 5) {
        let part1 = arr.slice(0, 5)
        let part2 = arr.slice(5)
        newsentence = part1.join(" ") + ", " + part2.join(" ")

    }
    else {

        newsentence = arr.slice(0, 5).join(" ") + ","

    }
    return newsentence
    // write your code here
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    let words = [];
    words = str.split(' ')
    let result = '';
    for (let w = 0; w < words.length; w++) {//i:strings array    
        for (let c = 0; c < words[w].length; c++) {//chars
            let counter = 1;

            for (let c2 = c + 1; c2 < words[w].length; c2++) {//aaaa
                if (words[w][c] == words[w][c2]) {
                    counter++
                }
                else {
                    break;
                }
            }
            result += words[w][c] + counter
            c += counter -1  
        }
        if (w != words.length - 1)
            result += ' '
    }

    console.log(result)


    /*split str to multiple strings depending on spaces 
      loop over the strings
      loop over the chars in the string
      loop over the chars with one char
      store the counter and all chars in two arrays  
      */

    return result;

    // write your code here
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };
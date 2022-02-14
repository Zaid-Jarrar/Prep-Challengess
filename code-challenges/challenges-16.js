'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    return string.split("").reverse().join("");
    //write your code here ...
}
reverseString("hello")
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    let filtered
    filtered = arr.filter((input) =>
        {
        
        return input.includes('^_^')
    })
    return filtered
   
}
detectFace(["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"]);
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    let filtered
    
    filtered = str.split('')
    let finalResult = filtered.filter((element,index) => {
        return (index % 2 == 0 )
        
   })
    return finalResult.join('');
    //write your code here ...
}
eveCharacter("coding")
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    let result = [];
    let newarr = arr.filter((input)=> {
        // console.log(input);
       
 for (let i = 0; i < input.length; i++) {
      if (input[i].includes('chicken')){

         result.push(input[i])
      }


 }
       
})
        
 
    return result
   
    //write your code here ...
}
chickenGradients([["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]]);
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };

// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// DONT FORGET TO COMMENT ON WHAT EACH LINE OF CODE IS DOING ---------------------------------------------
// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

// var temp1 = 85
// var temp2 = 350
// var temp3 = 212

// const tempCheck = (num) => {
//     // start of function 
//     let boil = 212
//     // set a variable to the boil value
//     if(typeof num !== "number"){
//         return `${num} is not a number`
//         // check if the user inputs something other than a number
//     }
//     if(num < boil){
//         return `${num} is below boiling point.`
//         // if the number is below the value, print this ^
//     } else if(num > boil){
//         return `${num} is above boiling point.`
//         // if the number is above the value, print this ^
//     } else if(num === boil) {
//         return `${num} is at boiling point.`
//         // if the number is =to the value, print this ^
//     } else {
//         return "You are out of range"
//         // if you type in something other than a number, print this ^ (another bug check)
//     }
// }
// console.log(tempCheck(212))



// // --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// // Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

// var myForNumbers1 = [3, 7, 0, 6, -9]
// var myForNumbers2 = [2, 5, -8, 20, 32]

// const multiply = (array) => {
//     // starting function
//     let newArr = []
//     // initializing an empty array
//     for(i = 0; i < array.length; i++){
//         // start of for loop
//         newArr.push(array[i] * 5)
//         // adding every element to the empty newArr array multiplied by 5
//     }
//     return newArr
//     // return the new array
// } 
// console.log(multiply(myForNumbers1))
// console.log(multiply(myForNumbers2))



// // --------------------3) Create a function that multiplies each number in the array by 5 using map.
// // Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]

// var myMapNumbers1 = [87, 6, 28, 16, 2]
// var myMapNumbers2 = [8, -7, 0, 6, 12]

// const mapMult = (array) => {
//     // start of a higher order function taking in an array for its argument
//     return array.map(value => {
//         // using .map to loop through every element 
//         return value * 5
//         // return every element multiplied by 5 
//     })
// }

// console.log(mapMult(myMapNumbers1))
// console.log(mapMult(myMapNumbers2))



// // --------------------4) Create a function that removes all the vowels from a string.
// // Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"

// const onlyVowel = (string) => {
//     // starting out the function
//     var spStr = string.split("")
//     // split up all of the strings in the array
//     var result = []
//     // initialize an empty array for later use 
//     for(i = 0; i < spStr.length; i++){
//         // start of for loop
//         if(spStr[i] === "a" || spStr[i] === "e" || spStr[i] === "i" || spStr[i] === "o" || spStr[i] === "u"){ // checks to see if the element in the split up string is a vowel
//             continue; // this continue statement allows the program to ignore the vowels and continue iterating through the string and with the else statment below, only add the consonants.
//         } else {
//             result.push(spStr[i])
//             // adds every consonant into the result array
//         }
//     }
//     return result.join("")
//     // returns the joined consonants to pop out a string again
// }
// console.log(onlyVowel(stringWithVowels1))
// console.log(onlyVowel(stringWithVowels2))



// // --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// // Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

// var refactorTester1 = true
// var refactorTester2 = 42
// var refactorTester3 = "IAmACodingMaster"

// const onlyVowel = (string) => {
//     // starting out the function
//     if(typeof string !== "string"){
//         return `${string} is not a string`
//     } // checks to see if the input is a string or not
//     var spStr = string.split("")
//     // split up all of the strings in the array
//     var result = []
//     // initialize an empty array for later use 
//     for(i = 0; i < spStr.length; i++){
//         // start of for loop
//         if(spStr[i] === "a" || spStr[i] === "e" || spStr[i] === "i" || spStr[i] === "o" || spStr[i] === "u"){ // checks to see if the element in the split up string is a vowel
//             continue; // this continue statement allows the program to ignore the vowels and continue iterating through the string, and with the else statment below, only add the consonants.
//         } else {
//             result.push(spStr[i])
//             // adds every consonant into the result array 
//         }
//     }
//     return result.join("")
//     // returns the joined consonants to pop out a string again 
// }
// console.log(onlyVowel(true))
// console.log(onlyVowel(42))
// console.log(onlyVowel("IAmACodingMaster"))



// // --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// // Expected output: "chopsticks" "stemware"

// var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
// var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]

// would like to try and get this one to work 
// const alphaString = (array) => { // trying a different train of thought
//     let counter = 0;
//     let lenArr = [];
//     let ind;
//     for(i = 0; i < array.length; i++){
//         lenArr.push(array[i].length);
//         for(i = 0; i < lenArr.length; i++){
//             if(lenArr[i] > counter){
//                 counter = lenArr[i]
//                 ind = lenArr.indexOf(counter)
//             }
//         }
//     }
//     return array[ind]
// }
// console.log(alphaString(vessels))

// var nums = [4, 5, 5, 30, 6, 1] // tryna understand how this shit works 
// var counter = 0
// for(i = 0; i < nums.length; i++){
//     if(nums[i] >= 0){
//         counter = nums[i]
//     }
// }
// console.log(counter)

// const alphaString = (array) => { // trying a different train of thought
//     let counter = 0;
//     // set a counter that will aid in the conditional
//     let ind;
//     // set a variable for the index
//     for(i = 0; i < array.length; i++){
//         // start of the for loop
//         let len = array[i].length;
//         // created variable len for cleanliness
//         if(len > counter){
//             // checks to see if the length of the current element is larger than 0
//             counter = len
//             // sets counter to the length of the current element which will help for the comparison of the next element in the next iteration
//             ind = array[i]
//             // sets variable index to the current element 
//         }
//     }
//     // once the loop stops in the evaluation process, the ind variable will return the current element of the array
//     return ind
// }
// console.log(alphaString(vessels))
// console.log(alphaString(utensils))



// // --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// // Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

// var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
// var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]

// // higher order function 
// var cutOff = (array) => { // this function returns the inside portion 
//     return array.map(value => {
//         // using map will look at every element in the array and return an array of the same length
//         let split = value.split("");
//         // split each value within the array 
//         split.pop();
//         // removes the last letter of each value
//         return split.join("") // this return is what adds every newly chopped-off word into a new array
//         // rejoin the string that had the last letter removed
//     })
// }
// console.log(cutOff(mario))
// console.log(cutOff(pacman))

// // regular function 
// const chopOff = (array) => {
//     // begins our function 
//     let newArr = []
//     // initializing an empty array
//     for(i = 0; i < array.length; i++){
//         // start of for loop
//         let split = array[i].split("");
//         // splits up each string
//         split.pop();
//         // removes the last letter of each string
//         let joined = split.join("") // had to set to a variable for .join("") to actually do its job
//         // joins each string back again
//         newArr.push(joined);
//         // adds each joined string back into the new array     
//     }
//     return newArr
//     // returns the new array containing the chopped off strings
// }
// console.log(chopOff(mario))
// console.log(chopOff(pacman))
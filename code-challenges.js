// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

// var temp1 = 85
// var temp2 = 350
// var temp3 = 212

// const tempCheck = (num) => {
//     let boil = 212
//     if(num < boil){
//         return `${num} is below boiling point.`
//     } else if(num > boil){
//         return `${num} is above boiling point.`
//     } else if(num === boil) {
//         return `${num} is at boiling point.`
//     } else {
//         return "You are out of range"
//     }
// }
// console.log(tempCheck(212))



// // --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// // Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

// var myForNumbers1 = [3, 7, 0, 6, -9]
// var myForNumbers2 = [2, 5, -8, 20, 32]

// const multiply = (array) => {
//     let newArr = []
//     for(i = 0; i < array.length; i++){
//         newArr.push(array[i] * 5)
//     }
//     return newArr
// } 
// console.log(multiply(myForNumbers1))
// console.log(multiply(myForNumbers2))



// // --------------------3) Create a function that multiplies each number in the array by 5 using map.
// // Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]

// var myMapNumbers1 = [87, 6, 28, 16, 2]
// var myMapNumbers2 = [8, -7, 0, 6, 12]

// const mapMult = (array) => {
//     return array.map(value => {
//         return value * 5
//     })
// }

// console.log(mapMult(myMapNumbers1))
// console.log(mapMult(myMapNumbers2))



// // --------------------4) Create a function that removes all the vowels from a string.
// // Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"

// var str = "Thisisastring"

// const onlyVowel = (string) => {
//     var spStr = string.split("")
//     var result = []
//     for(i = 0; i < spStr.length; i++){
//         if(spStr[i] === "a" || spStr[i] === "e" || spStr[i] === "i" || spStr[i] === "o" || spStr[i] === "u"){ 
//             continue; // this continue statement allows the program to ignore the vowels and continue iterating through the string and with the else statment below, only add the consonants.
//         } else {
//             result.push(spStr[i])
//         }
//     }
//     return result.join("")
// }
// console.log(onlyVowel(stringWithVowels1))
// console.log(onlyVowel(stringWithVowels2))




// // --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// // Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

// var refactorTester1 = true
// var refactorTester2 = 42
// var refactorTester3 = "IAmACodingMaster"

// const onlyVowel = (string) => {
//     if(typeof string !== "string"){
//         return `${string} is not a string`
//     }
//     var spStr = string.split("")
//     var result = []
//     for(i = 0; i < spStr.length; i++){
//         if(spStr[i] === "a" || spStr[i] === "e" || spStr[i] === "i" || spStr[i] === "o" || spStr[i] === "u"){ 
//             continue; // this continue statement allows the program to ignore the vowels and continue iterating through the string and with the else statment below, only add the consonants.
//         } else {
//             result.push(spStr[i])
//         }
//     }
//     return result.join("")
// }
// console.log(onlyVowel(true))
// console.log(onlyVowel(42))
// console.log(onlyVowel("IAmACodingMaster"))





// // --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// // Expected output: "chopsticks" "stemware"

var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]

    // const alphaString = (array) => { // trying a train of thought
    //     return array.filter(value, index => {
    //         let counter = 0
    //         let ind;
    //         if(value.length <= counter){
    //             continue;
    //         } else if(value.length >= counter){
    //             counter = value.length
    //             ind = index
    //         }
    //         return array[ind]
    //     })
    // }
    // console.log(alphaString(utensils))
// this shit needs work **************


// const alphaString = (array) => { // trying a different train of thought
//     let counter = 0;
//     let lenArr = [];
//     for(i = 0; i < array.length; i++){
//         lenArr.push(array[i].length);
//         for(i = 0; i < lenArr.length; i++){
//             if(lenArr[i] >= counter){
//                 counter = lenArr[i]
//             }
//         }
//     }
//     let ind = lenArr.indexOf(counter)
//     return array[ind]
// }
// console.log(alphaString(vessels))

var nums = [4, 5, 5, 30, 6, 1] // tryna understand how this shit works 
var counter = 0
for(i = 0; i < nums.length; i++){
    if(nums[i] >= 0){
        counter = nums[i]
    }
}
console.log(counter)

// const alphaString = (array) => { // trying a different train of thought
//     let counter = 0;
//     let ind = 0;
//     for(i = 0; i < array.length; i++){
//         let len = array[i].length;
//         if(len > counter){
//             ind = i
//         }
//     }
//     return array[ind]
// }
// console.log(alphaString(vessels))

// loop through the array
// count the length of every element
// add those lengths to another array 
// find the largest number and its index 



// // --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// // Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

// var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
// var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]

// // higher order function 
// var circumSize = (array) => { // this function returns the inside portion also the name was used for comedic (dark) reasons and will be changed before actual submission lol 
//     return array.map(value => {
//         let split = value.split("");
//         split.pop();
//         return split.join("") // this return is what adds every newly chopped-off word into a new array
//     })
// }
// console.log(circumSize(mario))
// console.log(circumSize(pacman))

// // regular function 
// const circum = (array) => { // dark comedic purposes on the func. name, will change before submission
//     let newArr = []
//     for(i = 0; i < array.length; i++){
//         let split = array[i].split("");
//         split.pop();
//         let joined = split.join("") // had to set to a variable for .join("") to actually do its job
//         newArr.push(joined);    
//     }
//     return newArr
// }
// console.log(circum(mario))
// console.log(circum(pacman))
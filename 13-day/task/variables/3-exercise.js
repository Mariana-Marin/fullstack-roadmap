/**
 * Here we have a string variable named string1.
 */
let string1 = "Playing with JS strings";

// Now store the first character of the string1 in a variable named firstCharacter

const firstCharacter = string1.charAt(0);

// ******************* DONT MODIFY - START ******************* 
console.log(firstCharacter); // this should print "P".
// ******************* DONT MODIFY - START ******************* 

// Now do the same but for the last character in a variable that named lastCharacter

const lastCharacter = string1.at(-1);

// Opcion 2
//const lastCharacter = string1[string1.length-1]

// ******************* DONT MODIFY - START ******************* 
console.log(lastCharacter); // this should print "s".
// ******************* DONT MODIFY - START ******************* 

// Nice, what about the first word ? let store the first word of the string in a new variable named firstWord.

const firstWord = string1.split(" ")[0];

// ******************* DONT MODIFY - START ******************* 
console.log(firstWord); // this should be "Playing".
// ******************* DONT MODIFY - START ******************* 

// can you add the firstWord to the original string ? obviously with a whitespace before it.


// ******************* DONT MODIFY - START ******************* 
console.log(string1); // this should print "Playing with JS strings Playing"
// ******************* DONT MODIFY - END ******************* 

// Now multiply firstWord by 3.


// ******************* DONT MODIFY - START ******************* 
console.log(firstWord); // this should print "PlayingPlayingPlaying"
// ******************* DONT MODIFY - END ******************* 

console.log([]/false)
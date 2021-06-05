/*
    CIT 281 Project 1
    Name: Pablo Manriquez
*/

// Returns a random number between min (inclusive) and max (exclusive)
function ayye(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function randomStr(length) {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for ( let i = 0; i < length; i++ ) {
       result += (abc.charAt(Math.floor(Math.random() * abc.length)));
   }
   return result;
}

console.log(randomStr(ayye(5, 25)));

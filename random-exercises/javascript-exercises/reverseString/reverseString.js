const reverseString = function(string) {
    let last_index = string.length - 1;
    let new_string = '';

    for(let i=0; i < string.length; i++){
        new_string += string[last_index];
        last_index--;
    }
    return new_string;
};

module.exports = reverseString;
console.log(reverseString(''));


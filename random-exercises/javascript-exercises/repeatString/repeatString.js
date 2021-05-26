const repeatString = function(string, number) {
    i = 0;
    let new_string = "";

    if (number < 0 || Number.isInteger(number) === false){
        return 'ERROR';
    }
    
    while (i < number){
        new_string += string;
        i++;
    }
    return new_string;
};
console.log(repeatString('hey',3));

module.exports = repeatString;



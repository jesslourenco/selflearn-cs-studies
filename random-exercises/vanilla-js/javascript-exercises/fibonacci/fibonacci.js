const fibonacci = function(member) {
    // Calculating the value in an specific position of the Fibonnaci sequence using Binet's formula
    if (member < 0){
        return "OOPS";
    }
    let fn = 0;  
    fn = (((1 + Math.sqrt(5)) / 2) ** member) - (((1 - Math.sqrt(5)) / 2) ** member);
    fn = fn / Math.sqrt(5);
    return Math.round(fn);

};

module.exports = fibonacci;

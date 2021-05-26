const sumAll = function(num1, num2) {   
if (validate(num1) === false || validate(num2) === false){ return 'ERROR'; }

let bigNum;
let smallNum;

    if (num1 < num2){ 
        bigNum = num2;
        smallNum = num1;        
    }
    else{
        bigNum = num1;
        smallNum = num2;
    }

    return calc(bigNum, smallNum);
};

const calc = function(bigNum,smallNum) {
    let total = 0;
    for(i = smallNum; i <= bigNum; i++){
        total += i;
    }
    return total;
}

const validate = function(num){
    if (Number.isInteger(num) === false || num < 0){
        return false;
    }
    return true;
}

console.log(sumAll(1,4));

module.exports = sumAll;
